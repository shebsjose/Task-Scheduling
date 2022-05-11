import axios from "axios";
import { fetchTaskRequest, fetchTaskSuccess, fetchTaskFailure } from "../actions/taskAction";
import { toast } from "react-toastify";
import { toastOptions } from "../utils/utils";

const apiEndPoint = "https://task-scheduling-api-v1.herokuapp.com/api/task";

export const createTask = (textValues) => {
  return async (dispatch) => {
    try {
      await axios.post(apiEndPoint + "/create", textValues);
      dispatch(getAllTask());
      toast.success('Successfully Created Task', toastOptions);
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
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 100);
      // });
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
  return async (dispatch) => {
    try {
      await axios.patch(apiEndPoint + "/change-status/" + task._id, task);
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
      toast.error(error.response.data, toastOptions);
    }
  };
};

export const deleteTask= (task) => {
  return async (dispatch) => {
    try {
        await axios.delete(apiEndPoint + "/delete/" + task._id,task);
        dispatch(getAllTask());
        toast.success('Successfully Deleted Task', toastOptions);
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
      toast.error(error.response.data, toastOptions);
    }
  };
};

export const updateTask= (task) => {
  console.log(task);
  return async (dispatch) => {
    try {
        await axios.put(apiEndPoint + "/update/" + task._id, task);
        dispatch(getAllTask());
        toast.success('Successfully Updated Task', toastOptions);
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
      toast.error(error.response.data, toastOptions);
    }
  };
};






