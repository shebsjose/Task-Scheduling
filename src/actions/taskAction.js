
export const fetchTaskRequest = () => {
    return {
      type: "FETCH_TASK_REQUEST",
    };
  };
  
  export const fetchTaskSuccess = (task) => {
    return {
      type: "FETCH_TASK_SUCCESS",
      payload: task,
    };
  };
  
  export const fetchTaskFailure = (error) => {
    return {
      type: "FETCH_TASK_FAILURE",
      payload: error,
    };
  };
  
  