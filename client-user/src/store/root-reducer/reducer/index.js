import {
  HANDLE_ACTION_GET_ALL_PRODUCT,
  HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
  HANDLE_ACTION_GET_ALL_PRODUCT_ERROR,
  HANDLE_ACTION_GET_ALL_PRODUCT_BY_ID,
  HANDLE_ACTION_GET_ALL_PRODUCT_BY_ID_LOADING,
  HANDLE_ACTION_GET_ALL_PRODUCT_BY_ID_ERROR,
  HANDLE_ACTION_GET_ALL_IMAGE_PRODUCT,
  HANDLE_ACTION_GET_ALL_IMAGE_PRODUCT_LOADING,
  HANDLE_ACTION_GET_ALL_IMAGE_PRODUCT_ERROR,
  HANDLE_GET_CATEGORY,
  HANDLE_FILTER_CATEGORY,
} from "../action-type/index";

let initialState = {
  product: [],
  category: [],
  productLoading: false,
  errorProduct: null,
  filter: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_ACTION_GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case HANDLE_GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case HANDLE_ACTION_GET_ALL_PRODUCT_LOADING:
      return {
        ...state,
        productLoading: action.payload,
      };
    case HANDLE_ACTION_GET_ALL_PRODUCT_ERROR:
      return {
        ...state,
        errorProduct: action.payload,
      };
    case HANDLE_FILTER_CATEGORY:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
