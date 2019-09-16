import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showDialog } from 'containers/App/actions';
// import { makeSelectUserId, makeSelectDialog } from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import Toaster from 'components/Toaster';
import noreport from 'assets/images/report.png';
import { Link } from 'react-router-dom'
import './style.scss';
import './assets/mysqpaymentform.css'
import placeholder from './placeholder.png';
import { DOCUMENT_URL_UPDATE, API_BASE  } from '../../../App/constants';
import { Redirect } from 'react-router-dom'
import PayWithCard from  './PayWithCard'


import {
  makeSelectCartProducts,
  makeSelectResponse,
  makeSelectpaymentSuccessData
} from './selectors';
// import { makeSelectLocation } from '../../../App/selectors';

import {
  getProductsInCartRequest,
  removeCartRequest,
  placeOrderRequest,
  payThroughCardRequest
} from './actions'

var paymentForm

const mapStateToProps = createStructuredSelector({
  // isRequesting: makeSelectLoading(),
  cartProducts:makeSelectCartProducts(),
  response:makeSelectResponse(),
  paymentSuccessData:makeSelectpaymentSuccessData()
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
  getProductsInCartRequest: () => dispatch(getProductsInCartRequest()),
  removeCartRequest: (id) => dispatch(removeCartRequest(id)),
  placeOrderRequest: (ids) => dispatch(placeOrderRequest(ids)),
  payThroughCardRequest: (data) => dispatch(payThroughCardRequest(data))
});

class Cart extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        data: {},
        totalPrice: null,
        arrayPIds: [],
        redirectToPayment: false,
        showModal: false
      };
  }


  componentDidMount() {
    this.props.getProductsInCartRequest()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cartProducts != nextProps.cartProducts) {
      var tot = 0
      var arrayProductId = new Array();
      nextProps.cartProducts && nextProps.cartProducts.toJS().dataList.map((item, index) => {
         tot = tot + item.product.price,
         arrayProductId.push(item.product._id)
        })
      this.setState({
        data: nextProps.cartProducts && nextProps.cartProducts.toJS(),
        totalPrice: tot,
        arrayPIds: arrayProductId
      });
    }
    if (this.props.response != nextProps.response) {
      this.setState({
        response_message: nextProps.response && nextProps.response,
      },()=>{  console.log(this.state.response_message,'ggg')});
    }
    if (this.props.paymentSuccessData != nextProps.paymentSuccessData) {
      this.setState({
        payment_data: nextProps.paymentSuccessData && nextProps.paymentSuccessData,
      });
    }
  }

  removeCart = (id) => {
    this.props.removeCartRequest(id)
  }
  placeOrder = (ids) => {
    this.setState({redirectToPayment: true, showModal: true})
    this.props.placeOrderRequest(ids)
  }

  onGetCardNonce = (event) => {
    // Don't submit the form until SqPaymentForm returns with a nonce
    event.preventDefault();
    // Request a nonce from the SqPaymentForm object
    paymentForm.requestCardNonce();
  }

  cartSection = () => {
    this.setState({redirectToPayment: false})
  }
 
  closeModal = () => {
      this.setState({ showModal: false })
    }  

    payFromCardRequest = (nonce) => {
      console.log('ffgg',nonce)
      this.setState({showModal: false})
      this.props.payThroughCardRequest(nonce)
    }  

  render() {
    const {  } = this.props;
    const { data, totalPrice, redirectToPayment, arrayPIds, showModal, payment_data } = this.state

    return (
      <div className="cart-grid">
        {/* {redirectToPayment && 
           <Redirect to={`/user/dashboard/payment-form`} />
        } */}
        {redirectToPayment && 
          <PayWithCard payFromCardRequest={this.payFromCardRequest} closeModal={this.closeModal} showModal={showModal} cartSection={this.cartSection} totalPrice = {totalPrice} />
        }
      
     {/* {!redirectToPayment && data && data.dataList && data.dataList.length > 0 && */}
      <div className="p-4 white-bg">
      <div className="ui top attached header cart-heading">
            <span> My Cart Items: ({data && data.dataList && data.dataList.length }) </span>
            <span className="right">Total: ${totalPrice}</span>
          </div>

          <div className="ui  divided items">
            {data && data.dataList && data.dataList.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="image">
                  <img src={`${DOCUMENT_URL_UPDATE}${item && 
                                    item.product.image_name && 
                                        item.product.image_name.document_name}`} 
                                            alt="product image here" />
                  </div>
                  <div className="content">
                    <p className="header">{item.product.title}</p>
                    <div className="meta">
                    <span className="price">${item.product.price}</span>
                    
                      {/* <span className="tag">Profile Name </span> */}
                    </div>
                    <div className="description">
                      <p> Profile Name :{item.product.profile_name} </p>
                      <p>{item.product.description}</p> 
                    </div>
                    <button onClick={() => this.removeCart(item._id) } className="ui basic labeled icon button delete-button">
                      <i className="trash alternate icon"></i>
                        Remove from Cart
                    </button>
                  </div>
                </div>
            )
          })}
          
</div>
</div>
    {/* //  } */}
     {/* {!redirectToPayment && data && data.dataList && data.dataList.length > 0 &&      */}
        <div className="order-detail">
          <div className="ui card">
            <div className="content grey-bg">
              <div className="header">Price Details</div>
            </div>
            <div className="content">

              <div className="pricing-grid">
                {/* <span className="">Product 1</span> */}
                {/* <span className="right"> ${totalPrice}</span> */}
              </div>
              
              <div className="pricing-grid total">
                <span className="">Order Total</span>
                <span className="right"> ${totalPrice}</span>
              </div>

            </div>

            <div className="extra content">
              <button 
                onClick={
                          () => this.placeOrder(arrayPIds)} 
                className="ui green labeled icon  button order-btn">
                    <i className="cart arrow down icon"></i>
                     Place Order
              </button>
            </div>
          </div>
        </div>
    {/* //  } */}
          {data && data.dataList && data.dataList.length < 1 &&
            <div>No Items On Cart...</div>
          }     
</div>
        

    );
  }
}

const withReducer = injectReducer({ key: 'cartProduct', reducer });
const withSaga = injectSaga({ key: 'cartProduct', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Cart);
