import axios from "axios";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess
} from "../actions/usersAction";
const apiEndPoint = "https://task-scheduling-api-v1.herokuapp.com/api/auth";

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
      const {
        data
      } = await axios.get(apiEndPoint + "/get-user");
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
    }
  };
};