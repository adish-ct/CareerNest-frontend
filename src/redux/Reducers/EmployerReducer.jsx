import { EMPLOYER_DETAILS } from '../Actions/Types';

const employerReducer = (prevState = null, action) => {
  switch (action.type) {
    case EMPLOYER_DETAILS:
      return action.payload;
    default:
      // Ensure to always return the previous state when the action type is not recognized
      return prevState;
  }
};

export default employerReducer;