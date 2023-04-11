import { ADD_JOBS } from "../actions";

const initialState = {
  content: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;