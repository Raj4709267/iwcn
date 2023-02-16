const initState = {
  isLoading: false,
  notes:[]
};

function AppReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case "API_REQUEST_START": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "API_REQUEST_END": {
      return {
        ...state,
        isLoading: false,
      };
    }
    case "GET_ALL_NOTES":{
      return {
        ...state,notes:payload
      }
    }

    default:
      return state;
  }
}

export { AppReducer };
