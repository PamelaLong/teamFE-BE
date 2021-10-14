import backEnd from "./redux/reducers/backEnd";
import frontEnd from "./redux/reducers/backEnd";


export const StudentData = (dispatch, message) => {
    dispatch({type: StudentData })
    // console.log(message);
};

export const backEnd = (dispatch, message) => {
    dispatch({type: backEnd})
    // console.log(message);
};

export const frontEnd = (dispatch, message) => {
    dispatch({type: frontEnd })
    // console.log(message);
};

export default TeamActions;
