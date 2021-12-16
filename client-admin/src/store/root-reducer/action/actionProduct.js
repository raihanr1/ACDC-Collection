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
import baseUrl from "../../../BaseUrlConfig";

export function createNewCategory(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_CREATE_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/users/categories`, {
      method: "POST",
      headers: {
        access_token: localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 201) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch({
          type: ACTION_USER_CREATE_SUCCESS,
          payload: true,
        });
        dispatch({
          type: ACTION_USER_CREATE_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        err
          .json()
          .then((response) => {
            dispatch({
              type: ACTION_USER_CREATE_ERROR,
              payload: response,
            });
            dispatch({
              type: ACTION_USER_CREATE_LOADING,
              payload: false,
            });
          })
          .catch((err) => {
            dispatch({
              type: ACTION_USER_CREATE_ERROR,
              payload: err,
            });
            dispatch({
              type: ACTION_USER_CREATE_LOADING,
              payload: false,
            });
          });
      });
  };
}

export function createProduct(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_CREATE_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/users/products/${data.CategoryId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 201) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch({
          type: ACTION_USER_CREATE_SUCCESS,
          payload: true,
        });
        dispatch({
          type: ACTION_USER_CREATE_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        err
          .json()
          .then((response) => {
            dispatch({
              type: ACTION_USER_CREATE_ERROR,
              payload: response,
            });
            dispatch({
              type: ACTION_USER_CREATE_LOADING,
              payload: false,
            });
          })
          .catch((err) => {
            dispatch({
              type: ACTION_USER_CREATE_ERROR,
              payload: err,
            });
            dispatch({
              type: ACTION_USER_CREATE_LOADING,
              payload: false,
            });
          });
      });
  };
}

export function getCategory() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_CREATE_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/products/categories`)
      .then((response) => {
        if (response.status !== 200) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch({
          type: ACTION_USER_PRODUCT_CATEGORY,
          payload: data,
        });
        dispatch({
          type: ACTION_USER_CREATE_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        err.json().then((response) => {
          dispatch({
            type: ACTION_USER_CREATE_LOADING,
            payload: false,
          });
        });
      });
  };
}

export function deleteProduct(id) {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_DELETE_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/users/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw response;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        dispatch({
          type: ACTION_USER_DELETE_SUCCESS,
          payload: id,
        });
        dispatch({
          type: ACTION_USER_DELETE_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        err
          .json()
          .then((response) => {
            dispatch({
              type: ACTION_USER_DELETE_ERROR,
              payload: response,
            });
            dispatch({
              type: ACTION_USER_DELETE_LOADING,
              payload: false,
            });
          })
          .catch((err) => {
            dispatch({
              type: ACTION_USER_DELETE_ERROR,
              payload: err,
            });
            dispatch({
              type: ACTION_USER_DELETE_LOADING,
              payload: false,
            });
          });
      });
  };
}

export function updateProduct(productId, input) {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: ACTION_USER_UPDATE_LOADING,
        payload: true,
      });
      let response = await fetch(`${baseUrl}/users/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify(input),
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 200) {
        throw response;
      }
      let data = await response.json();
      dispatch({
        type: ACTION_USER_UPDATE_SUCCESS,
        payload: true,
      });
      dispatch({
        type: ACTION_USER_UPDATE_LOADING,
        payload: false,
      });
    } catch (error) {
      let response = await error.json();
      dispatch({
        type: ACTION_USER_UPDATE_ERROR,
        payload: response,
      });
      dispatch({
        type: ACTION_USER_UPDATE_LOADING,
        payload: false,
      });
    }
  };
}

export function getAllProduct() {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_GET_PRODUCT_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/products`)
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
