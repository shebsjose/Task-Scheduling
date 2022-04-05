import axios from "axios";
const apiEndPoint = "http://localhost:5000/api/task";

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
  
  export const createTask = (textValues) => {
    return async  dispatch => {
        try {
            dispatch(fetchTaskRequest())
            console.log('request');
            const response = await axios.post(apiEndPoint + "/create", textValues);
            console.log(response);
            dispatch(fetchTaskSuccess(response.data));
          }
          catch(error) {
              console.log('error');
            dispatch(fetchTaskFailure(error.message))
          }
          
}
}

export const getAllUser = () => {
  return async  dispatch => {
      try {
          dispatch(fetchTaskRequest())
          console.log('request');
          const response = await axios.get(apiEndPoint + "/user",);
          console.log(response);
          dispatch(fetchTaskSuccess(response.data));
        }
        catch(error) {
            console.log('error');
          dispatch(fetchTaskFailure(error.message))
        }
        
}
}