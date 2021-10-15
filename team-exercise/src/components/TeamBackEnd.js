import React from "react";
import "./Teams.css";
import { useDispatch } from 'react-redux';
import { addToBackEnd } from "../actions/TeamActions";
import { addToFrontEnd } from "../actions/TeamActions";



export default function TeamBackend(props) {
  const dispatch = useDispatch();
  const { student } = props;
  console.log(student);
  return (
    <div>
      <h1>Team Back End</h1>
      <div className="backend">
        {student?.map((student) => {
          return (
            <div className="student">
              <img src={student?.image} alt="" srcset="" />
              <h4>{student?.name}</h4>
              <div>
                <button onClick= {() => addToBackEnd(dispatch, "moved to team back end")}>Team Backend</button>
                <button onClick= {() => addToFrontEnd(dispatch, "moved to team front end")}>Team Frontend</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
