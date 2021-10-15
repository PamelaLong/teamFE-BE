import { combineReducers } from "redux";
import StudentData from "./studentData";
import backEnd from "./backEnd";
import frontEnd from "./frontEnd";



const rootReducer = combineReducers({
  // insert your reducers here
  StudentData,
  backEnd,
  frontEnd,

});

export default rootReducer;

