import {
  ACTION_USER_CREATE_SUCCESS,
  ACTION_USER_CREATE_LOADING,
  ACTION_USER_CREATE_ERROR,
  ACTION_USER_UPDATE_SUCCESS,
  ACTION_USER_UPDATE_LOADING,
  ACTION_USER_UPDATE_ERROR,
  ACTION_USER_DELETE_SUCCESS,
  ACTION_USER_DELETE_LOADING,
  ACTION_USER_DELETE_ERROR,
  ACTION_USER_GET_PRODUCT_SUCCESS,
  ACTION_USER_GET_PRODUCT_LOADING,
  ACTION_USER_GET_PRODUCT_ERROR,
} from "../action-type/actionType";

let initialState = {
  product: [],
  isLoadingProduct: true,
  isErrorProduct: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_CREATE_SUCCESS:
      return {
        ...state,
        successCreate: action.payload,
      };
    case ACTION_USER_GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case ACTION_USER_GET_PRODUCT_LOADING:
      return {
        ...state,
        isLoadingProduct: action.payload,
      };
    case ACTION_USER_GET_PRODUCT_ERROR:
      return {
        ...state,
        isErrorProduct: action.payload,
      };
    default:
      return state;
  }
}
