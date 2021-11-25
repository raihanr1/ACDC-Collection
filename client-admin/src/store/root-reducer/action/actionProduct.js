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
import baseUrl from "../../../BaseUrlConfig";
export function createProduct() {
  return (dispatch, getState) => {};
}

export function updateProduct() {
  return (dispatch, getState) => {};
}

export function deleteProduct() {
  return (dispatch, getState) => {};
}

export function getAllProduct() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_GET_PRODUCT_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/product`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => {
        dispatch({
          type: ACTION_USER_GET_PRODUCT_SUCCESS,
          payload: data,
        });
        dispatch({
          type: ACTION_USER_GET_PRODUCT_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTION_USER_GET_PRODUCT_ERROR,
          payload: err,
        });
      });
  };
}

export function getImageById() {
  return (dispatch, getState) => {};
}
