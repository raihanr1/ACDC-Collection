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
} from "../action-type/index";

export default function productReducer(state, action) {
  switch (action.type) {
    case HANDLE_ACTION_GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}
