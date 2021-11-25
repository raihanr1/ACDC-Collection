import { combineReducers } from "redux";
import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";

export default combineReducers({
  user: userReducer,
  product: productReducer,
});
