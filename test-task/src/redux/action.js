import * as actions from './actionTypes.js';

export const userIsAuth = (isAuth) => ({
  type: actions.USER_IS_AUTH,
  payload: isAuth
});
