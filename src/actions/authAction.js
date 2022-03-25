import axios from "axios";
const apiEndPoint = "http://localhost:5000/api/user"

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
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
       const response = await axios.post(apiEndPoint + "/register", data);
       console.log(response);
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
    }
  };
};

export const loginFetchUser = (data) => {
  console.log("loginFetchUser => ",data);
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
       const response = await axios.get(apiEndPoint + "/login", data);
       console.log(response);
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
    }
  };
};


 