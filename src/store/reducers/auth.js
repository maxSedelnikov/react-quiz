import actionTypes from '../actions/actionTypes';

const { AUTH_SUCCESS, AUTH_LOGOUT } = actionTypes;

const initialState = {
  toke: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
}
