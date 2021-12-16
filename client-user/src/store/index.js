import { createStore } from "redux";
import reducer from "./root-reducer/index";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

let store = createStore(reducer, applyMiddleware(thunk));

export default store;
