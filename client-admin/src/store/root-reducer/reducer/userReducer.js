import {
  ACTION_USER_LOGIN_SUCCESS,
  ACTION_USER_LOGIN_LOADING,
  ACTION_USER_LOGIN_ERROR,
  ACTION_USER_REGISTER_SUCCESS,
  ACTION_USER_REGISTER_LOADING,
  ACTION_USER_REGISTER_ERROR,
} from "../action-type/actionType";

let initialState = {
  loginSuccess: false,
  loginLoading: false,
  loginError: null,
  successRegister: false,
  loadingRegister: false,
  errorRegister: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload,
      };
    case ACTION_USER_LOGIN_LOADING:
      return {
        ...state,
        loginLoading: action.payload,
      };
    case ACTION_USER_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    case ACTION_USER_REGISTER_SUCCESS:
      return {
        ...state,
        successRegister: action.payload,
      };
    case ACTION_USER_REGISTER_LOADING:
      return {
        ...state,
        loadingRegister: action.payload,
      };
    case ACTION_USER_REGISTER_ERROR:
      return {
        ...state,
        errorRegister: action.payload,
      };
    default:
      return state;
  }
}
