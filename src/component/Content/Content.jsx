import React from "react";
import ActivitiesCard from "../ActivitiesCard/ActivitiesCard";
import "./Content.css";
// import { PersonalData } from "../../Store Data/Personaldata";

import { useState, useEffect } from "react";
import { getActivities } from "../../api/activity.js"
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteActivity } from '../../api/activity.js'

const Content = (props) => {

  const [activities, setActivities] = useState([])
  const { user } = useContext(UserContext);

  const getActivitiesList = async () => {
    setActivities(props.Dateselect)
    if (!activities) {
      return
    } const response = await getActivities()
    if (!response.data?.result?.length) return
    setActivities(() => [...response.data.result])
  };

  const handleDelete = async (id) => {
    if (typeof id === 'undefined') return
    await deleteActivity(id)
    await getActivitiesList()


  }

  useEffect(() => {
    if (user) {
      getActivitiesList()
      return;
    }
    if (user === null) {
      window.location = '/';
    }
  }, [user]);


  const fiterActivities = activities.filter((activity, idx) => {
    if (
      activity.type === props.activitiesTypes ||
      props.activitiesTypes === "all"
    ) {
      return activity;
    }
  });


  return (
    <div className=" content-container">
      {
        fiterActivities.map((value, idx) => {
          return <ActivitiesCard key={idx}
            activitiesDeatils={value} handleDelete={handleDelete} />
        })

      }
      {/* <ActivitiesCard activitiesDeatils={activityInfo} /> */}
    </div>
  );
};

export default Content;
