import axios from "axios";
const apiEndPoint = "http://localhost:5000/api/task";
// import { fetchTaskFailure, fetchTaskRequest, fetchTaskSuccess } from "../actions/taskAction";

export const createTask = (textValues) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(apiEndPoint + "/create", textValues);
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  };
};

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apiEndPoint + "/users");
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  };
};

export const getAllTask = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apiEndPoint + "/all-task");
      console.log(response);
    } catch (error) {
      console.log("error");
    }
  };
};
