import { combineReducers } from "redux";
import loginReducer from "./authReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";


const allReducer = combineReducers({
  login: loginReducer,
  task: taskReducer,
  users : userReducer
});

export default allReducer;
