const initialState = {
  loading: null,
  user: {},
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case "FETCH_USER_FAILURE":
      return {
        loading: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
