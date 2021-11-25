import { createStore } from "redux";
import actionReducer from "./root-reducer/actionReducer";

let store = createStore(actionReducer);
export default store;
