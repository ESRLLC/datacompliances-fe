import { fromJS } from "immutable";
import * as types from "./constants";

const initialState = fromJS({
  countryData:[],
  response: '',
  error: '',
  requesting: false,
  success: true,
  mobile_number_validated: false,
  sms_sent: false,
  is_sms_Requesting: false,
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COUNTRY_REQUEST:
    case types.SIGNUP_REQUEST:
      return state.merge({
        requesting: true,
        error: '',
        response: '',
      });
    case types.SIGNUP_SUCCESS:
      return state.merge({
        requesting: false,
        response: action.response.message,
        error: '',
      });

    case types.GET_COUNTRY_SUCCESS:
        return state.merge({
            requesting : false,
            success : true,
            countryData : fromJS(action.response.data),
            error : '',
            response : ''
        })

    case types.GET_COUNTRY_FAILURE:
    case types.SIGNUP_FAILURE:
      return state.merge({
        requesting: false,
        response: '',
        error: action.error.message,
      });

    case types.LINK_GOOGLE_FAILURE:
      return state.merge({
        requesting: false,
        response: '',
        error: action.error.message,
      });
    case types.LINK_FACEBOOK_FAILURE:
      return state.merge({
        requesting: false,
        response: '',
        error: action.error.message,
      });
    case types.CLEAR_MESSAGE:
      return state.merge({
        response: '',
        error: '',
      });

    case types.CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default signupReducer;
