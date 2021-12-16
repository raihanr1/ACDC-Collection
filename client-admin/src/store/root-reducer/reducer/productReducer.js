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
  ACTION_USER_PRODUCT_CATEGORY,
} from "../action-type/actionType";

let initialState = {
  product: [],
  isLoadingProduct: true,
  isErrorProduct: null,
  successCreate: false,
  loadingCreate: false,
  errorCreate: null,
  category: [],
  loadingDelete: false,
  errorDelete: null,
  successUpdate: false,
  loadingUpdate: false,
  errorUpdate: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_USER_CREATE_SUCCESS:
      return {
        ...state,
        successCreate: action.payload,
      };
    case ACTION_USER_CREATE_LOADING:
      return {
        ...state,
        loadingCreate: action.payload,
      };
    case ACTION_USER_CREATE_ERROR:
      return {
        ...state,
        errorCreate: action.payload,
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
    case ACTION_USER_PRODUCT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ACTION_USER_DELETE_SUCCESS:
      return {
        ...state,
        product: state.product.filter((el) => el.id != action.payload),
      };
    case ACTION_USER_DELETE_LOADING:
      return {
        ...state,
        loadingDelete: action.payload,
      };
    case ACTION_USER_DELETE_ERROR:
      return {
        ...state,
        errorDelete: action.payload,
      };
    case ACTION_USER_UPDATE_SUCCESS:
      return {
        ...state,
        successUpdate: action.payload,
      };
    case ACTION_USER_UPDATE_LOADING:
      return {
        ...state,
        loadingUpdate: action.payload,
      };
    case ACTION_USER_UPDATE_ERROR:
      return {
        ...state,
        errorUpdate: action.payload,
      };
    default:
      return state;
  }
}
