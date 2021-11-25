import { createStore } from "redux";

let input = {
  user: [],
};

function storeReducer(state = input, action) {
  switch (action.type) {
    case "":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

let store = createStore(storeReducer);

export default store;
