import React from "react";
import "./Teams.css";
import { useDispatch } from 'react-redux';


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
                {/* <button onClick= {() => backEnd(dispatch, "moved to team back end")}>Team Backend</button>
                <button onClick= {() => frontEnd(dispatch, "moved to team front end")}>Team Frontend</button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
