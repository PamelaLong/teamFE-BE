import backEnd from "./backEnd";

const initialState = [];

const BackEnd = (state = initialState, action) => {
  switch (action.type) {
    case "BACKEND":
      return state + backEnd;
    
    default:
      return state;
  }
};
export default BackEnd;
