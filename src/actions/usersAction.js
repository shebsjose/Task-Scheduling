
export const fetchUserRequest = () => {
    return {
      type: "FETCH_USER_REQUEST",
    };
  };
  
  export const fetchUserSuccess = (userTask) => {
    return {
      type: "FETCH_USER_SUCCESS",
      payload: userTask,
    };
  };
  
  export const fetchUserFailure = (error) => {
    return {
      type: "FETCH_USER_FAILURE",
      payload: error,
    };
  };