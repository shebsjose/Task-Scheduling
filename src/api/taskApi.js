import axios from "axios";
import { fetchTaskRequest, fetchTaskSuccess, fetchTaskFailure } from "../actions/taskAction";
import { toast } from "react-toastify";
import { toastOptions } from "../utils/utils";
const apiEndPoint = "http://localhost:5000/api/task";

export const createTask = (textValues) => {
  return async (dispatch) => {
    try {
      await axios.post(apiEndPoint + "/create", textValues);
      toast.success('Successfully Created', toastOptions);
      return {res : true}
    } catch (error) {
      console.log(error);
      toast.error(error.response.data, toastOptions);
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
      toast.error(error.response.data, toastOptions);
    }
  };
};

export const changeTaskStatus = (task) => {
  console.log(task);
  return async (dispatch) => {
    try {
      dispatch(fetchTaskRequest());
      const { data } = await axios.patch(apiEndPoint + "/change-status/" + task._id, task);
      dispatch(fetchTaskSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
    }
  };
};

export const deleteTask= (task) => {
  console.log(task);
  return async (dispatch) => {
    try {
      dispatch(fetchTaskRequest());
      const { data } = await axios.delete(apiEndPoint + "/change-status/" + task._id );
      dispatch(fetchTaskSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
    }
  };
};




