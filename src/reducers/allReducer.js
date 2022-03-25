import { combineReducers } from "redux";
import loginReducer from "./authReducer";

const allReducer = combineReducers({
  login: loginReducer,
});

export default allReducer;
