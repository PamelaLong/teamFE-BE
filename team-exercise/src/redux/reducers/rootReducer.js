import { combineReducers } from "redux";
import StudentData from "./studentData";
import BackEnd from "./backEnd";
import FrontEnd from "./frontEnd";



const rootReducer = combineReducers({
  // insert your reducers here
  StudentData,
  BackEnd,
  FrontEnd,

});

export default rootReducer;

