import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../../features/activities/activitySlice";


const Activity = () => {
  const { activities, isLoading } = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  /*function getAll (){
    useDispatch(getAllActivities());
  }*/

  useEffect(() => {
   dispatch(getAllActivities())
  }, []); 

  console.log(activities)

  const activity = activities.map((a) => {
    if (isLoading){
      return <h1>cargando...</h1>
    }
    
    return (
      <div className="activity">
        <p>{a.title}</p>
        <p>{a.image}</p> 
        <p>{a.body}</p>
        <p>{a.address}</p>
      </div>
    );
  });

  return <div>{activity}</div>;
};

export default Activity;
