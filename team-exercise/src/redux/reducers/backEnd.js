import { BACK_END } from "../../action-types/team-types";

const initialState = [];

const BackEnd = (state = initialState, action) => {
  switch (action.type) {
    case BACK_END:
      return [...state, action.payload]
    
    default:
      return state;
  }
};
export default BackEnd;
