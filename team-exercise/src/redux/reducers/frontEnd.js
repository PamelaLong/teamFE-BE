import frontEnd from "./frontEnd";

const initialState = [];

const FrontEnd = (state = initialState, action) => {
  switch (action.type) {
    case "FRONTEND":
      return state + frontEnd;
    
    default:
      return state;
  }
};
export default FrontEnd;
