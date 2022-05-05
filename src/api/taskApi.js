import axios from "axios";
import { fetchTaskRequest, fetchTaskSuccess, fetchTaskFailure } from "../actions/taskAction";
import Swal from 'sweetalert2'
const apiEndPoint = "https://task-scheduling-api-v1.herokuapp.com/api/task";

export const createTask = (textValues) => {
  return async (dispatch) => {
    try {
      await axios.post(apiEndPoint + "/create", textValues);
      dispatch(getAllTask());
      Swal.fire(
        'Good job!',
        'You Created Successfully !',
        'success'
      );
      return {res : true}
    } catch (error) {
      console.log(error);
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
        Swal.fire(
          'Good job!',
          'You Delete Successfully !',
          'success'
        )
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
        Swal.fire(
          'Good job!',
          'You Updated Successfully !',
          'success'
        )
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






