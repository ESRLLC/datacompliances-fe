/**
 *
 * ProductList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Icon } from 'semantic-ui-react';
import Toaster from 'components/Toaster';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loadProductByIdRequest, getQuestionRequest, addToCartRequest} from '../actions';
import {
  makeSelectError,
  makeSelectRequesting,
  makeSelectPackageResponse,
  makeSelectSuccess,
  makeSelectNewData,
  makeSelectQuestions,
  makeSelectCartSuccessdata
} from '../selectors';

import {
  makeSelectUserInfo
} from 'containers/Login/selectors';

import reducer from '../reducer';
import saga from '../saga';

import ProductView from './createProductview'
import QuestionsTable from './QuestionsTable'
import './assets/style.scss'
import '../../../assets/table.scss'
import moment from 'moment';
import { Redirect } from 'react-router-dom'
import { push } from 'react-router-redux';


const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectPackageResponse(),
  isRequesting: makeSelectRequesting(),
  singlePackage: makeSelectNewData(),
  questions:makeSelectQuestions(),
  userInfo:makeSelectUserInfo(),
  // cartSuccessdata:makeSelectCartSuccessdata()
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(loadProductByIdRequest(id)),
  getQuestionRequest: (page, perPage, query,) =>
   dispatch(getQuestionRequest(page, perPage, query)),
   addToCartRequest: data => dispatch(addToCartRequest(data)),
});

/* eslint-disable react/prefer-stateless-function */
export class ProductList extends React.Component {
  state = {
    redirect: false,
    questions:{},
    data: {},
    page: 1,
    perPage: 10,
    query: {},
    userInfo: {}
  };
  componentDidMount() {
    let id = this.props.match.params.id ? this.props.match.params.id : null;
    if(id) {
      this.props.fetchProduct(id);
      this.props.getQuestionRequest(1, 5, id);
    }
  }
  componentWillReceiveProps(nextProps) {
    // if (this.props.cartSuccessdata != nextProps.cartSuccessdata) {
    //   this.setState({
    //     cartPostData: nextProps.cartSuccessdata && nextProps.cartSuccessdata,
    //   });
    // }
    if (this.props.singlePackage != nextProps.singlePackage) {
      this.setState({
        data: nextProps.singlePackage.toJS(),
      });
    }
    if (this.props.questions != nextProps.questions && nextProps.questions != "") {
      this.setState({
        questions: nextProps.questions && nextProps.questions,
      });
    }
    if (this.props.userInfo && this.props.userInfo.toJS()) {
      this.setState({
        userInfo: this.props.userInfo.toJS(),
      });
    }
  }
  buyProduct = () => {
    let id = this.props.match.params.id ? this.props.match.params.id : null;
    const data = {
      user_id: this.state.userInfo._id,
      product_id: id,
      price: this.state.data.price,
    }
    this.props.addToCartRequest(data)

  }
  attemptQuestions = () => {
    this.setState({redirect: true })
  }
  render() {
    const { data, questions, userInfo, redirect, cartPostData } = this.state;
    const {
      successResponse,
      errorResponse } = this.props
    const actions = [
      {
        key: 1,
        format: data => (
          // {data.status && data.status !== 'Verified' &&

          <span className="action__btn" key={`${data._id}`}>
            {' '}
            <Icon  name="eye" onClick={() => this.getDetail(data._id)} />
          </span>
        ),
        // }
      },
    ];

    let filterActions = actions;
    const headers = [
      {
        name: 'Questions',
        field: 'Questions',
        key: 1,
        format: data => {
          return (
          <div>
           <div className="table-trim">{data.question}</div>
          </div>
          )
        },
      },
      {
        name: 'Question Type',
        field: 'type_of_question',
        key: 2,
        format: data => {
          return (
          <div>
           <div className="table-trim">{data.type_of_questions}</div>
          </div>
          )
        },
      },
    ];

    let message = null;
    if (successResponse) {
      message = <Toaster message={successResponse} timeout={3000} success />;
    }
    if (errorResponse) {
      message = <Toaster message={errorResponse} timeout={30000} error />;
    }

    return (
      <div className="mr-4">
         {redirect &&
           <Redirect to={`/user/dashboard/product-display/questions/${this.props.match.params.id}`}/>
          }
        <Helmet>
          <title>Product Details</title>
          <meta name="description" content="Description of PackageList" />
        </Helmet>
        {message && message}
        <h1 className="main_title">{data.title}</h1>
        <ProductView
                // cartPostData={cartPostData}
                viewdata={this.state.data}
                buyProduct={this.buyProduct}
                attemptQuestions={this.attemptQuestions}
        />
        <h1 className="main_title mt-5">Top 5 Questionnaires</h1>
        {questions && questions.size > 0 &&
           <QuestionsTable
                headers={headers}
                tableData={questions}
                loading={false}
                page={1}
                perPage={5}
                onPaginate={this.onPaginate}
              />  
          }
      </div>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productList', reducer });
const withSaga = injectSaga({ key: 'productList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductList);
