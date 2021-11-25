import { LOADING_REDUCER } from "./TypeReducer";

export function handlePayloadLoading(type, payload) {
  return {
    type: LOADING_REDUCER,
    payload,
  };
}
