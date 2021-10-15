import React from "react";
import "./Teams.css";
import { useDispatch } from 'react-redux';
import FrontEnd from "../redux/reducers/frontEnd";
import BackEnd from "../redux/reducers/frontEnd";


export default function TeamFrontEnd(props) {
  const dispatch = useDispatch();
  const { student } = props;
  console.log(student);
  return (
    <div>
      <h1>Team Front End</h1>
      <div className="frontend">
        {student?.map((student) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>
              <div>
                <button onClick= {() => FrontEnd(dispatch, "moved to team front end")}>Team Frontend</button>
                <button onClick= {() => BackEnd(dispatch, "moved to team back end")}>Team Backend</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
