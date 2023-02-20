import * as actions from '../actionTypes.js';

export default (state = false, action) => {
  switch (action.type) {
    case actions.USER_IS_AUTH:
      let { payload } = action;
      return {
        ...state,
        isAuth: payload
      };
    default:
      return state;
  }
};
