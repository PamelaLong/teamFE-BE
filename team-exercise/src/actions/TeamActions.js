import { BACK_END } from "../action-types/team-types";
import { FRONT_END } from "../action-types/team-types";

// export const StudentData = (dispatch, ) => {
//     dispatch({type: StudentData })
    // console.log(message);
// };

export const addToBackEnd = (dispatch, student) => {
    dispatch({type: BACK_END,
    payload: student})
    // console.log(message);
};

export const addToFrontEnd = (dispatch, student) => {
    dispatch({type: FRONT_END,
    payload: student})
    // console.log(message);
};


