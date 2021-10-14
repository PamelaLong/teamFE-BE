import React from "react";
import "./Teams.css";
import { useDispatch } from 'react-redux';


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
                {/* <button onClick= {() => frontEnd(dispatch, "moved to team front end")}>Team Frontend</button>
                <button onClick= {() => backEnd(dispatch, "moved to team back end")}>Team Backend</button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
