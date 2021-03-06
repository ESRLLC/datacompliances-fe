/*
 *
 * PackageList reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  questionsSuccess:'',
  response: null,
  xresponse: null,
  error: null,
  requesting: false,
  success: false,
  dataObj: [],
  newData: {},
  packages: [],
  addCartSuccessdata: ''
});

function PackageListReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART_REQUEST:
    case types.GET_QUESTION_REQUEST:
    case types.LOAD_PRODUCT_REQUEST:
    case types.LOAD_PACKGE_BY_ID_REQUEST:
    case types.POST_CART_REQUEST:
    case types.REMOVE_CART_REQUEST:
    case types.LOAD_ALL_CART_PACKAGE_REQUEST:
      let xresponse =
        state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: true,
        success: false,
        response: xresponse,
        xresponse: null,
        error: null,
        questionsSuccess:'',
        addCartSuccessdata: ''
      });

    case types.GET_QUESTION_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: '',
        questionsSuccess: fromJS(action.response.data),
        error: '',
      });  

    case types.ADD_TO_CART_SUCCESS:
      xresponse =
        state.get('response') != null ? state.get('response') : null;
    return state.merge({
      requesting: false,
      success: true,
      response: xresponse,
      error: null,
      addCartSuccessdata: action.response.data
      // dataObj: fromJS(action.response.data.dataList),
    });  

    case types.LOAD_PRODUCT_SUCCESS:
      //   let xresponse =
      //     state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: false,
        success: true,
        response: xresponse,
        error: null,
        dataObj: fromJS(action.response.data.dataList),
      });
    case types.LOAD_PACKGE_BY_ID_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
        newData: fromJS(action.response.data),
      });
    case types.POST_CART_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
      });
    case types.REMOVE_CART_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
      });
    case types.LOAD_ALL_CART_PACKAGE_SUCCESS:
      return state.merge({
        requesting: false,
        response: action.response.message,
        error: null,
        success: true,
        packages: fromJS(action.response.data),
      });
    case types.ADD_TO_CART_FAILURE:  
    case types.GET_QUESTION_FAILURE:
    case types.LOAD_PRODUCT_FAILURE:
    case types.LOAD_PACKGE_BY_ID_FAILURE:
    case types.POST_CART_FAILURE:
    case types.REMOVE_CART_FAILURE:
    case types.LOAD_ALL_CART_PACKAGE_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: null,
        error: action.error.message,
      });
    case types.CLEAR_MESSAGE:
      return state.merge({
        response: null,
        error: null,
      });
    default:
      return state;
  }
}

export default PackageListReducer;
