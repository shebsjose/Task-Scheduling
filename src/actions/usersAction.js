
export const fetchUserTaskRequest = () => {
    return {
      type: "FETCH_USER_TASK_REQUEST",
    };
  };
  
  export const fetchUserTaskSuccess = (userTask) => {
    return {
      type: "FETCH_USER_TASK_SUCCESS",
      payload: userTask,
    };
  };
  
  export const fetchUserTaskFailure = (error) => {
    return {
      type: "FETCH_USER_TASK_FAILURE",
      payload: error,
    };
  };