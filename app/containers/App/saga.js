import { take, takeLatest, fork, put, cancel, select, call } from 'redux-saga/effects';
// import { LOCATION_CHANGE } from 'react-router-redux';

import Api from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';
import * as loginTypes from '../Login/constants';
import React from 'react';
import { push, LOCATION_CHANGE } from 'react-router-redux';
import { makeSelectLocation, makeSelectUser } from './selectors';
import {
	checkCaptchaSuccess,
	checkCaptchaFailure,
	loginSuccess,
	loginFailure,
	logoutSuccess,
	logoutFailure,
	loginClearState,
	loginByTokenSuccess,
	loginByTokenFailure,
	resendConfirmationSuccess,
	resendConfirmationFailure,
	privateKeySuccess,
	privateKeyFailure,
} from '../Login/actions';
import MultiFactorAuth from '../Login/multi-factor-login';
import PasswordSetForm from '../Register/PasswordSetForm';
// import getRedirectUrl from 'utils/getDashboardUrl';
import { delay } from 'redux-saga';
import getToken from 'utils/getToken';

function* redirectOnLoginByTokenSuccess() {
	yield take(loginTypes.LOGIN_BY_TOKEN_SUCCESS);
}

function* redirectOnLoginByTokenFailure() {
	yield take(loginTypes.LOGIN_BY_TOKEN_FAILURE);
	yield put(push('/'));
}

function* loginByTokenFlow(action) {
	const successWatcher = yield fork(redirectOnLoginByTokenSuccess);
	const failureWatcher = yield fork(redirectOnLoginByTokenFailure)
	const { userId } = action;
	const token = localStorage.getItem('token');
	yield fork(Api.get(`user/data/${userId}`, loginByTokenSuccess, loginByTokenFailure, token));
	yield take(loginTypes.LOGIN_BY_TOKEN_FAILURE);
	yield cancel(successWatcher);
	yield cancel(failureWatcher);
}

const checkIfMultiFactor = (response) => {
	if (response.data && response.data.multi_factor_auth_enable_mobile) {
		return actions.showDialog(<MultiFactorAuth user_id={response.data.user_id} />);
	}
	if (response.data && response.data.multi_factor_auth_enable) {
		return actions.showDialog(<MultiFactorAuth user_id={response.data.user_id} />);
	}
	if (response.data && response.data.password_set === false) {
		return actions.showDialog(<PasswordSetForm user_id={response.data.user_id} email={response.data.user_email} />);
	}
	return loginSuccess(response);
};

const checkIfPasswordNotSet = (error) => {
	if (error.data && error.data.password_set === false) {
		return actions.showDialog(<PasswordSetForm user_id={error.data.user_id} email={error.data.user_email} />);
	}
	return loginFailure(error);
};

function* redirectOnLoginSuccess(redirect) {
	const action = yield take(loginTypes.LOGIN_SUCCESS);
	const { user: { data: { token, userInfo } } } = action;
	localStorage.setItem('token', token);
	yield put(actions.showDialog(null));
	yield put(actions.setToken(token));
	yield put(actions.setUser(userInfo));
	if (userInfo.user_role[0] == 'enduser') {
		yield put(push('/user/dashboard'));
	} 
}

function* checkCaptchaFlow() {
	const successWatcher = yield fork(redirectOnCheckCaptchaSuccess);
	yield fork(Api.get('user/check/captcha', checkCaptchaSuccess, checkCaptchaFailure));
	yield take([ LOCATION_CHANGE, loginTypes.CHECK_CAPTCHA_FAILURE ]);
	yield cancel(successWatcher);
}

function* redirectOnCheckCaptchaSuccess() {
	yield take(loginTypes.CHECK_CAPTCHA_SUCCESS);
}

function* loginFlow(action) {
	const successWatcher = yield fork(redirectOnLoginSuccess, action.redirect);
	yield fork(Api.post('login', checkIfMultiFactor, checkIfPasswordNotSet, action.data));
	yield take([ LOCATION_CHANGE, loginTypes.LOGIN_FAILURE ]);
	yield cancel(successWatcher);
}

function* redirectOnLogoutSuccess() {
	yield take(loginTypes.LOGOUT_SUCCESS);
	localStorage.removeItem('token');
	// localStorage.clear();
	sessionStorage.removeItem('token');
	yield put(push('/'));
	// yield call(delay, 5000);
	yield put(loginClearState());
}

function* logoutUser() {
	const user = yield select(makeSelectUser());

	const userRoles = user.get('user_role') ? user.get('user_role').toJS() : [ 'enduser' ];

	const token = userRoles.includes('superadmin') ? localStorage.getItem('token') : getToken();

	if (token === localStorage.getItem('token')) {
		const successWatcher = yield fork(redirectOnLogoutSuccess);
		yield fork(Api.delete('user/logout', logoutSuccess, logoutFailure, token));
		yield take([ LOCATION_CHANGE, loginTypes.LOGOUT_FAILURE ]);
		yield cancel(successWatcher);
	} else {
		sessionStorage.removeItem('token');
		yield put(logoutSuccess());
		yield put(push('/'));
	}
}

function* loadContentTemplateRequest() {
	yield call(
		Api.get(
			'content-template?page=1&perpage=20',
			actions.loadContentTemplateSuccess,
			actions.loadContentTemplateFailure,
		),
	);
}

function* resendConfirmationRequest(action) {
	// const successWatcher = yield fork(redirectOnSuccess);
	// since confirm use is going to give updated token by invalidating current token,
	// it makes sense to log out user after server responds success if user is logged in
	yield fork(Api.post(`user/resend-confirm-email/${action.userId}`, resendConfirmationSuccess, resendConfirmationFailure,  { userId: action.userId }, ''));
	// yield take([LOCATION_CHANGE, types.CONFIRM_USER_FAILURE]);
	// localStorage.clear();
	// sessionStorage.removeItem('token');
	// yield put(logoutSuccess());
	// yield cancel(successWatcher);
  }

  function* privateKeyRequest(action) {
	yield call(
		Api.get(
			`key-generate/key/${action.data}`,
			 privateKeySuccess,
			 privateKeyFailure,
		),
	);
}

// Individual exports for testing
export default function* defaultSaga() {
	yield takeLatest(loginTypes.LOGIN_REQUEST, loginFlow);
	yield takeLatest(loginTypes.CHECK_CAPTCHA_REQUEST, checkCaptchaFlow);
	yield takeLatest(loginTypes.LOGOUT_REQUEST, logoutUser);
	yield takeLatest(loginTypes.LOGIN_BY_TOKEN_REQUEST, loginByTokenFlow);
	yield takeLatest(types.LOAD_CONTENT_TEMPLATE_REQUEST, loadContentTemplateRequest);
	yield takeLatest(loginTypes.RESEND_CONFIRMATION_REQUEST, resendConfirmationRequest);
	yield takeLatest(loginTypes.PRIVATE_KEY_REQUEST, privateKeyRequest);
}


