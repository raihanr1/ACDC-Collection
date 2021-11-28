import {
  HANDLE_ACTION_GET_ALL_PRODUCT,
  HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
  HANDLE_ACTION_GET_ALL_PRODUCT_ERROR,
  HANDLE_ACTION_GET_ALL_PRODUCT_BY_ID,
  HANDLE_ACTION_GET_ALL_PRODUCT_BY_ID_LOADING,
  HANDLE_ACTION_GET_ALL_PRODUCT_BY_ID_ERROR,
  HANDLE_GET_CATEGORY,
  HANDLE_FILTER_CATEGORY,
} from "../action-type/index";

import baseUrl from "../../../baseUrl";

export function fetchAllProduct(params) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/products`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status !== 200) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data, ">>>");
        dispatch({
          type: HANDLE_ACTION_GET_ALL_PRODUCT,
          payload: data,
        });
        dispatch({
          type: HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        err.json((data) => {
          dispatch({
            type: HANDLE_ACTION_GET_ALL_PRODUCT_ERROR,
            payload: data,
          });
          dispatch({
            type: HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
            payload: false,
          });
        });
      });
  };
}

export function getCategories(params) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/products/categories`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        if (response.status !== 200) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data, ">> asup");
        dispatch({
          type: HANDLE_GET_CATEGORY,
          payload: data,
        });
        dispatch({
          type: HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        err.json((data) => {
          dispatch({
            type: HANDLE_ACTION_GET_ALL_PRODUCT_ERROR,
            payload: data,
          });
          dispatch({
            type: HANDLE_ACTION_GET_ALL_PRODUCT_LOADING,
            payload: false,
          });
        });
      });
  };
}

export function filerByCategory(filter) {
  return (dispatch, getState) => {
    dispatch({
      type: HANDLE_FILTER_CATEGORY,
      payload: filter,
    });
  };
}
