import axios from "axios";
import { toast } from "react-toastify";
import {fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../actions/authAction";


const apiEndPoint = "http://localhost:5000/api/auth";

export const registerUser = (data) => {
    return async () => {
      try {
        await axios.post(apiEndPoint + "/register", data);
        toast.success("Sucessfully Register");
        return { register: true} 
      } catch (error) {
        toast.error(error.message);
        return { register: false}
      }
    };
  };
  
  export const loginUser = (inputValues) => {
    return async (dispatch) => {
      try {
        dispatch(fetchUserRequest());
         const { data } = await axios.post(apiEndPoint + "/login", inputValues);
        const { token, user} = data;
         localStorage.setItem('Token', JSON.stringify(token))
        dispatch(fetchUserSuccess(user));
        toast.success("Sucessfully Login");
        return { login: true}
      } catch (error) {
        dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
        toast.error(error.response.data);
        return { login: false}
      }
    };
  };