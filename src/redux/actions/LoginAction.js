import * as types from '../types/Type';

export function requestLogin(username, password,fcmToken, history) {
  console.log('call requestLogin');
  console.log('\n',username,'\n',password,'\n',fcmToken,'\n',history);
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
    fcmToken,
    history
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}