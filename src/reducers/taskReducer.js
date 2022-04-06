const initialState = {
    loading: null,
    task: [],
    error: "",
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_TASK_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_TASK_SUCCESS":
        return {
          ...state,
          loading: false,
          task: action.payload,
          error: "",
        };
      case "FETCH_TASK_FAILURE":
        return {
          loading: false,
          task : [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  