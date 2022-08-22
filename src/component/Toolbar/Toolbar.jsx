import { Link } from "react-router-dom";
import Content from "../content/Content";
import { activitiesByDate } from '../../api/activity.js'

import React, { useState } from "react";

import "./Toolbar.css";

const activitieList = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Run",
    value: "run",
  },
  {
    name: "Walk",
    value: "walk",
  },
  {
    name: "Bicycle",
    value: "bike",
  },
  {
    name: "Swim",
    value: "swim",
  },
  {
    name: "Hike",
    value: "hike",
  },
];




const Toolbar = () => {
  const [showActivities, setShowActivities] = useState("all");


  // const [selectDate, setSelectDate] = useState(new Date())
  let selectByDate = []

  // const handleSetDate = async (e) => {

  //   // setSelectDate(e.target.value)
  //   selectByDate = await activitiesByDate(e.target.value)

  //   // console.log(selectByDate.data.result)
  //   // setShowActivities(selectByDate.data.result)
  // }


  const handleShowActivities = (e) => {
    return setShowActivities(e.target.value);
  };

  console.log(showActivities)
  return (
    <div >
      <div className="toolbar-container">
        <div className="toolbar-head">
          <h1>Your Activities</h1>
        </div>
        <div className="toolbar-bottom">
          <div className="toolbar-bottom-left">
            {activitieList.map((name, index) => (
              <button
                key={index}
                className="toolbar-activities"
                onClick={handleShowActivities}
                value={name.value}
              >
                {name.name}
              </button>
            ))}
          </div>
          <div className="toolbar-bottom-right">
            <input type="date" id="chooseDay" />
            <Link to="/AddActivity">
              <button className="addData" ><p>Add your data</p></button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Content activitiesTypes={showActivities} Dateselect={selectByDate} />
      </div>
    </div>
  );
};

export default Toolbar;
