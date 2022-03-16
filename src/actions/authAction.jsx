import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: "FETCH_USER_REQUEST",
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUserRequest());
      const response = await axios.get("");
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message || "Unexpected Error!!!"));
    }
  };
};
