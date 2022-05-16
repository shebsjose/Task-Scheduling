const initialState = {
  loading: null,
  userTask: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
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
        userTask: action.payload,
        error: "",
      };
    case "FETCH_USER_FAILURE":
      return {
        loading: false,
        userTask: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
