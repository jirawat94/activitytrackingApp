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

  const activityInfo = test

  console.log(activityInfo);
  return (
    <div className=" content-container">
      {
        activityInfo.map(value => {
          return <ActivitiesCard
            activitiesDeatils={value} />
        })

      }
      {/* <ActivitiesCard activitiesDeatils={activityInfo} /> */}
    </div>
  );
};

export default Content;
