import React from "react";
import { useDispatch } from "react-redux";
import New from '../News/New/New'

const News = () => {
  // eslint-disable-next-line 
  const dispatch = useDispatch();
 
  
 
  return (
    <div className="news">
      
      <div>
      <New />
      </div>
    </div>
  );
};

export default News;
