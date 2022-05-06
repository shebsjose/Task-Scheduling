import axios from "axios";
import {
  fetchUserTaskFailure,
  fetchUserTaskRequest,
  fetchUserTaskSuccess
} from "../actions/usersAction";
const apiEndPoint = "https://task-scheduling-api-v1.herokuapp.com/api/auth";

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserTaskRequest());
      const {
        data
      } = await axios.get(apiEndPoint + "/get-user");
      dispatch(fetchUserTaskSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUserTaskFailure(error.message || "Unexpected Error!!!"));
    }
  };
};