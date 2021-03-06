import React from 'react';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { Form, Button, Modal, Header, Icon, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import InputField from 'components/common/Forms/InputField';
import Captcha from 'components/Captcha';
import PasswordInputField from 'components/common/Forms/PasswordInputField';
import { Link } from 'react-router-dom';
import reducer from './reducer';
import '../../assets/base/form-base-style.scss';
import saga from '../App/saga';
// import GoogleLogin from 'react-google-login';
import { showDialog } from '../App/actions';
import {API_BASE} from '../App/constants'

import {
  makeSelectRequesting,
  makeSelectError,
  makeSelectResponse,
  makeSelectEmail,
  makeSelectSuccess,
  makeSelectCaptchaEnabled,
  makeSelectUserId,
  makeSelectResendEmailRequesting,
} from './selectors';
import ForgotPassword from './forgot-password/Loadable';
import { GOOGLE_CLIENT_ID } from '../App/constants';
import { makeSelectUser } from '../App/selectors';
import logo from './assets/logo.png';
import {
  logoutRequest,
  loginRequest,
  checkCaptchaRequest,
  loginClearMessages,
  resendConfirmationRequest,
  linkFacebookRequest,
  linkGoogleRequest,
  privateKeyRequest
} from './actions';

const mapDispatchToProps = dispatch => ({
  loginRequest: (values, redirect) => dispatch(loginRequest(values, redirect)),
  showDialog: dialog => dispatch(showDialog(dialog)),
  isCaptchaEnabledRequest: () => dispatch(checkCaptchaRequest()),
  clearMessages: () => dispatch(loginClearMessages()),
  redirectToSignup: () => dispatch(push('/signup')),
  resendConfirmationEmail: userId =>
    dispatch(resendConfirmationRequest(userId)),
  linkFacebookRequest: (token, isImp) =>
    dispatch(linkFacebookRequest(token, isImp)),
  linkGoogleRequest: (token, isImp) =>
    dispatch(linkGoogleRequest(token, isImp)),
  logout: () => dispatch(logoutRequest()),
  privateKeyRequest: (id) => dispatch(privateKeyRequest(id))
});

const mapStateToProps = createStructuredSelector({
  userResponse: makeSelectUser(),
  requesting: makeSelectRequesting(),
  requestingResendEmail: makeSelectResendEmailRequesting(),
  response: makeSelectResponse(),
  error: makeSelectError(),
  success: makeSelectSuccess(),
  isCaptchaEnabled: makeSelectCaptchaEnabled(),
  unverifiedImpUserId: makeSelectUserId(),
  email: makeSelectEmail(),
});

class LoginForm extends React.Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    showDialog: PropTypes.func.isRequired,
    isCaptchaEnabledRequest: PropTypes.func.isRequired,
    redirectToSignup: PropTypes.func.isRequired,
    clearMessages: PropTypes.func.isRequired,
    resendConfirmationEmail: PropTypes.func.isRequired,
    unverifiedImpUserId: PropTypes.string.isRequired,
    requestingResendEmail: PropTypes.bool.isRequired,
  };

  state = {
    modalOpen: true,
    data: {
      username: this.props.email || '',
    },
    reCaptcha: '',
    show_password: false,
    errors: {},
    loadingFb: false,
    loadingGoogle: false,
    redirectToReferer: false,
    requestingKey: false
  };

  componentDidMount() {
    this.props.isCaptchaEnabledRequest();
  }

  componentWillUnmount() {
    this.props.clearMessages();
  }

  handleChange = e => {
    e.persist();
    this.setState(state => ({
      data: {
        ...state.data,
        [e.target.name]: e.target.value,
      },
    }));
  };

  validate = () => {
    const { data, reCaptcha } = this.state;
    const { isCaptchaEnabled } = this.props;
    const errors = {};
    if (!data.username) errors.username = "Can't be blank";
    if (!data.password) errors.password = 'password_error';
    if (isCaptchaEnabled && !reCaptcha)
      errors.reCaptcha = 'Please check I am not a Robot checkbox';
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { isCaptchaEnabled, loginRequest } = this.props;
    const { data, reCaptcha } = this.state;
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const { from } = this.props.location.state || { from: false };

      if (isCaptchaEnabled) loginRequest({ ...data, reCaptcha }, from);
      else loginRequest(data, from);
    }
  };

  onChange = e => {
    this.setState({
      reCaptcha: e,
    });
  };

  showSignUpForm = () => {
    this.props.showDialog(null);
    this.props.redirectToSignup();
  };

  showForgotPasswordForm = () => {
     this.props.showDialog(<ForgotPassword />);
    }
  resendEmail = () => {
    this.props.resendConfirmationEmail(this.props.unverifiedImpUserId);
  };
  downloadFile = (file) => {


    let data, downloadLink, filename;
    filename = 'private-key' + new Date().toISOString().slice(-24).replace(/\D/g, '').slice(0, 14) + '.txt';
    if (!file.match(/^data:text\/csv/i)) {
      file = 'data:text/csv;charset=utf-8,' + file;
    }

    data = encodeURI(file);

    downloadLink = document.createElement("a");
    downloadLink.setAttribute('href', data);
    downloadLink.setAttribute('download', filename);
    document.getElementById("privatekey").appendChild(downloadLink)
    downloadLink.click();
    this.setState({modalOpen: false, requestingKey: false})
  }

  keyDownload = (id) => {
    // this.props.privateKeyRequest(id)
    this.setState({requestingKey: true})
    fetch(`${API_BASE}key-generate/key/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Origin": "*",
        // Authorization: token //? `${usertoken}` : undefined
      }
    })
      .then(resp => {
        return resp.text();
      })
      .then(data => {
        this.downloadFile(data)
      })
  }

  render() {
    const { data, errors, requestingKey } = this.state;
    const {
      response,
      error,
      requesting,
      isCaptchaEnabled,
      unverifiedImpUserId,
      requestingResendEmail,
      location,
      userResponse,
    } = this.props;
    const userResp = userResponse ? userResponse.toJS() : '{}';
    let url = '';
    if (userResp && Object.keys(userResp).length > 1) {
      url =
        userResp.user_role[0] == 'enduser'
          ? '/user/dashboard'
          : '/consultant/dashboard';
    }
    return (
      <div>
        {error && (
          <div className="negative message">
            <p>{error}</p>
            {unverifiedImpUserId && (
              <Button
                secondary
                size="small"
                onClick={this.resendEmail}
                disabled={requestingResendEmail}
                loading={requestingResendEmail}
              >
                Resend Email
              </Button>
            )}
          </div>
        )}
        <h3>
          {( userResp  && ( localStorage.getItem('token') != null ) ) && Object.keys(userResp).length > 1
            ? 'Already Logged in'
            : <a href="#" className="pcsc-logo">
						<img src={logo}/>
					</a>}
        </h3>
        {((userResp && Object.keys(userResp).length < 1 ) || ( localStorage.getItem('token') == null ))  && (
          <Form onSubmit={this.handleSubmit} className="ui form">
            <InputField
              type="text"
              label="Username"
              name="username"
              placeholder="Enter Username "
              className="form-control"
              value={data.username || ''}
              onChange={this.handleChange}
              error={errors.username ? 'username_error' : null}
              
            />
            <div className="pos-rel mg-btm-sm password-field">
              <PasswordInputField
                password={data.password || ''}
                onChange={this.handleChange}
                placeholder="Enter Password "
                error={errors.password ? 'password_error' : null}
              />
            </div>

            <div>
              {isCaptchaEnabled && (
                <div className="hasCaptcha field" style={{ height: '76px' }}>
                  <Captcha onChange={this.onChange} />
                  {errors.reCaptcha && (
                    <span data-tooltip={errors.reCaptcha}>
                      <i className="icon-exclamation-triangle red" />
                    </span>
                  )}
                </div>
              )}
            </div>

            <Button
              className="btn btn-primary primary"
              type="submit"
              loading={requesting}
              disabled={requesting}
            >
              Login
            </Button>
            <br />
            <br />
            <div className="forgot-password"> 
              {window.location.pathname.split('/')[1] != 'guest-detail' && (
                <div>
                <a
                  tabIndex=""
                  onClick={this.showForgotPasswordForm}
                  className="frg-pw"
                >
                  Forgot Password ?
                </a>
                <br />
                <Link
                to={`/register`}
                role="button"
               >
               <b>Register here</b>
             </Link> 
             </div>
              )}
            </div>
            {response && 
          <div>
             <Modal id="privatekey" className=" " open={this.state.modalOpen} size="mini" style={{leftMargin :  "20%"}} >
                  <Header icon='info' content='Download Private Key!' />
                  <Modal.Content style={{minHeight :  "80px"}}>
                  <span>User created successfully. Please check your email inbox for further instructions.</span><br/>
                  <br/>
                  <span><b>Now, you must download your private key and keep it safely. Click on download key button and wait for a few seconds.</b></span>
                  </Modal.Content>
                  <Modal.Actions>
                  <Button loading={requestingKey} className="download-btn" onClick={() => this.keyDownload(response._id)} color="blue">Download Key</Button>
                  </Modal.Actions>
                </Modal>
          </div>
          }
          </Form>
        )}
        {userResp && ( localStorage.getItem('token') != null ) && Object.keys(userResp).length > 1 && (
          <div>
            <p>
              You are already logged in. Go to{' '}
              <Link className="alt-link" to={url}>
                {' '}
                Dashboard{' '}
              </Link>
              .
            </p>
            OR
            <Label className="alt-link" onClick={this.props.logout}>
              {' '}
              Logout{' '}
            </Label>{' '}
            and sign in using different account.
          </div>
        )}
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'login', reducer });
// const withSaga = injectSaga({ key: 'login', saga });
export default compose(
  withReducer,
  withConnect,
)(LoginForm);
