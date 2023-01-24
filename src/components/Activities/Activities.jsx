import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activity from '../Activities/Activity/Activity'
import {getAllActivities} from '../../features/activities/activitySlice'
import "./Activities.css";

const Activities = () => {
  const dispatch = useDispatch();
 

  return (
    <div className="activities">
      <h1>Activities</h1>
      <div>
      <Activity />
      </div>
    </div>
  );
};

export default Activities;
