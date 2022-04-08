import axios from "axios";
import { fetchTaskRequest, fetchTaskSuccess, fetchTaskFailure } from "../actions/taskAction";
const apiEndPoint = "http://localhost:5000/api/task";

export const createTask = (textValues) => {
  return async () => {
    try {
      await axios.post(apiEndPoint + "/create", textValues);
    } catch (error) {
      console.log(error);
    }
  };
};


export const getAllTask = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTaskRequest());
      const { data } = await axios.get(apiEndPoint + "/all-task");
      dispatch(fetchTaskSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
    }
  };
};


