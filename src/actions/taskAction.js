
export const fetchTaskRequest = () => {
    return {
      type: "FETCH_TASK_REQUEST",
    };
  };
  
  export const fetchTaskSuccess = (user) => {
    return {
      type: "FETCH_TASK_SUCCESS",
      payload: user,
    };
  };
  
  export const fetchTaskFailure = (error) => {
    return {
      type: "FETCH_TASK_FAILURE",
      payload: error,
    };
  };
  
  