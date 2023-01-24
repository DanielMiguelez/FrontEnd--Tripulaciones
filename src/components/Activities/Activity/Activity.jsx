import React from "react";
import { useSelector } from "react-redux";

const Activity = () => {
  const { activities, isLoading } = useSelector((state) => state.activities);

  const activity = activities.map((activity) => {
    if (isLoading){
      return <h1>cargando...</h1>
    }
    return (
      
      <div className="activity">
        <p>{activity.title}</p>
        <p>{activity.image}</p>
        <p>{activity.body}</p>
        <p>{activity.address}</p>
      </div>
    );
  });

  return <div>{activity}</div>;
};

export default Activity;
