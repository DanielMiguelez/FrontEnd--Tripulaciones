import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Activity from '../Activities/Activity/Activity'
import "./Activities.css";

const Activities = () => {
   // eslint-disable-next-line 
  const dispatch = useDispatch();
 

  return (
    <div className="activities">
      
      <div>
      <Activity />
      </div>
    </div>
  );
};

export default Activities;
