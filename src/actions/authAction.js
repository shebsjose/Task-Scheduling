import axios from "axios";
import { toast } from "react-toastify";
const apiEndPoint = "http://localhost:5000/api/user";

export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: user,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};

export const registerFetchUser = (data) => {
  console.log("registerFetchUser => ",data);
  return async () => {
    try {
       const response = await axios.post(apiEndPoint + "/register", data);
       console.log(response);
      toast.success("Sucessfully Register"); 
    } catch (error) {
      toast.error(error.message);
    }
  };
};


// export const loginFetchUser = (data) => {
//   return async (dispatch) => {
//     try {
//       dispatch(fetchUserRequest());
//        const response = await axios.post(apiEndPoint + "/login", data);
//        localStorage.setItem('Token', JSON.stringify(response.data))
//       dispatch(fetchUserSuccess(response.data));
//       toast.success("Sucessfully Login");
//       return { success: true}
//     } catch (error) {
//       dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
//       toast.error(error.response.data);
//       console.log(error.response.data);
//       return { success: false}
//     }
//   };
// };

export const loginFetchUser = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
       const response = await axios.post(apiEndPoint + "/login", data);
       localStorage.setItem('Token', JSON.stringify(response.data))
      dispatch(fetchUserSuccess(response.data));
      toast.success("Sucessfully Login");
      return { success: true}
    } catch (error) {
      dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
      toast.error(error.response.data);
      return { success: false}
    }
  };
};


 