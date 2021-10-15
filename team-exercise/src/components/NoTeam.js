import React from "react";
import "./Teams.css";
import { addToFrontEnd } from "../actions/TeamActions";
import { addToBackEnd } from "../actions/TeamActions";
import { useDispatch } from "react-redux";
// import { BACK_END } from "../action-types/team-types";


export default function NoTeam(props) {
  const dispatch = useDispatch();
  const { student } = props;

  return (
    <div>
      <h1>No Team</h1>
      <div className="no-team">
        {student?.map((student) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcSet="" />
              <h4>{student?.name}</h4>


              <button onClick= {()=> addToFrontEnd(dispatch, student) }>Team Frontend</button>
              <button onClick= {()=> addToBackEnd(dispatch, student) }>Team Backend</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
