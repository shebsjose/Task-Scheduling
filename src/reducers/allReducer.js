import { combineReducers } from "redux";
import loginReducer from "./authReducer";
import taskReducer from "./taskReducer";

const allReducer = combineReducers({
  login: loginReducer,
  task: taskReducer
});

export default allReducer;
