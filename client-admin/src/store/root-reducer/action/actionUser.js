import {
  ACTION_USER_LOGIN_SUCCESS,
  ACTION_USER_LOGIN_LOADING,
  ACTION_USER_LOGIN_ERROR,
  ACTION_USER_REGISTER_SUCCESS,
  ACTION_USER_REGISTER_LOADING,
  ACTION_USER_REGISTER_ERROR,
} from "../action-type/actionType";

import baseUrl from "../../../BaseUrlConfig";

export function userLogin(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_LOGIN_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/users/login`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status != 200) {
          throw response;
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: ACTION_USER_LOGIN_SUCCESS,
          payload: data,
        });
        dispatch({
          type: ACTION_USER_LOGIN_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTION_USER_LOGIN_ERROR,
          payload: err,
        });
        dispatch({
          type: ACTION_USER_LOGIN_LOADING,
          payload: false,
        });
      });
  };
}

export function userRegister(data) {
  return (dispatch, getState) => {
    dispatch({
      type: ACTION_USER_REGISTER_LOADING,
      payload: true,
    });
    fetch(`${baseUrl}/users/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
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
          type: ACTION_USER_REGISTER_SUCCESS,
          payload: true,
        });
        dispatch({
          type: ACTION_USER_REGISTER_LOADING,
          payload: false,
        });
      })
      .catch((err) => {
        err
          .json()
          .then((response) => {
            dispatch({
              type: ACTION_USER_REGISTER_ERROR,
              payload: response,
            });
            dispatch({
              type: ACTION_USER_REGISTER_LOADING,
              payload: false,
            });
          })
          .catch((err) => {
            dispatch({
              type: ACTION_USER_REGISTER_ERROR,
              payload: err,
            });
          });
      });
  };
}
