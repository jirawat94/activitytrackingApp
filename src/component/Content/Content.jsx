import React from "react";
import ActivitiesCard from "../ActivitiesCard/ActivitiesCard";
import "./Content.css";
import { PersonalData } from "../../Store Data/Personaldata";

const Content = (props) => {
  const test = PersonalData[0].activity.filter((activity, idx) => {
    if (
      activity.type === props.activitiesTypes ||
      props.activitiesTypes === "all"
    ) {
      return activity;
    }
  });
  console.log(test);
  return (
    <div className=" content-container">
      <ActivitiesCard activitiesDeatils={test} />
    </div>
  );
};

export default Content;
