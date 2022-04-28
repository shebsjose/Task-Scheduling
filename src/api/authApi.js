import axios from "axios";
import { toast } from "react-toastify";
import {fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../actions/authAction";
import { toastOptions } from "../utils/utils";

const apiEndPoint = "http://localhost:5000/api/auth";

export const registerUser = (data) => {
    return async () => {
      try {
        await axios.post(apiEndPoint + "/register", data);
        toast.success('Successfully Register', toastOptions);
        return true
      } catch (error) {
        toast.error(error.response.data, toastOptions);
        return false
      }
    };
  };
  
  export const loginUser = (inputValues) => {
    return async (dispatch) => {
      try {
        dispatch(fetchUserRequest());
         const { data } = await axios.post(apiEndPoint + "/login", inputValues);
        const { token, user} = data;
        localStorage.setItem('Token', token)
        dispatch(fetchUserSuccess(user));
        toast.success('Successfully Login',toastOptions);
        return true
      } catch (error) {
        dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
        toast.error(error.response?.data, toastOptions);
        return false
      }
    };
  };

  