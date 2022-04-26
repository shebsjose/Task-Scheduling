import axios from "axios";
import { fetchTaskRequest, fetchTaskSuccess, fetchTaskFailure } from "../actions/taskAction";
// import { toast } from "react-toastify";
import Swal from 'sweetalert2'
// import { toastOptions } from "../utils/utils";
const apiEndPoint = "http://localhost:5000/api/task";

export const createTask = (textValues) => {
  return async (dispatch) => {
    try {
      await axios.post(apiEndPoint + "/create", textValues);
      // toast.success('Successfully Created', toastOptions);
      Swal.fire(
        'Good job!',
        'You Created Successfully !',
        'success'
      )
      dispatch(getAllTask());
      return {res : true}
    } catch (error) {
      console.log(error);
      //  toast.error(error.response.data, toastOptions);
      Swal.fire(
        'Oops',
        error.response.data,
        'error'
      )
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
      // toast.error(error.response.data, toastOptions);
      Swal.fire(
        'Oops',
         error.response.data,
        'error'
      )
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
      Swal.fire(
        'Oops',
        error.response.data,
        'error'
      )
    }
  };
};

export const deleteTask= (task) => {
  return async (dispatch) => {
    try {
        await axios.delete(apiEndPoint + "/delete/" + task._id,task);
        dispatch(getAllTask());
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
      Swal.fire(
        'Oops',
        error.response.data,
        'error'
      )
    }
  };
};

export const updateTask= (task) => {
  console.log(task);
  return async (dispatch) => {
    try {
        await axios.put(apiEndPoint + "/update/" + task._id, task);
        dispatch(getAllTask());
    } catch (error) {
      console.log(error);
      dispatch(fetchTaskFailure(error.message || "Unexpected Error!!!"));
      Swal.fire(
        'Oops',
        error.response.data,
        'error'
      )
    }
  };
};






