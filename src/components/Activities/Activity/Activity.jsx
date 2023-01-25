import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllActivities } from "../../../features/activities/activitySlice";
import "./Activity.css";

const Activity = () => {
  const { activities, isLoading } = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  /*function getAll (){
    useDispatch(getAllActivities());
  }*/

  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  console.log(activities);

  const activity = activities.map((a) => {
    if (isLoading) {
      return <h1>cargando...</h1>;
    }

    return (
      <div className="activity" key={a.id}>
        <div>
        <Link to = {"/activity/" + a.id }>
          {a.image}
          <br />
          <br />
          {a.title}
          <br />
          {a.body}
          <br />
          {a.address}
        </Link>
        </div>
      </div>
    );
  });

  return <div>{activity}</div>;
};

export default Activity;
