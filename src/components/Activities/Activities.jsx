import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activity from '../Activities/Activity/Activity'

const Activities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      <div>
      <Activity />
      </div>
    </div>
  );
};

export default Activities;
