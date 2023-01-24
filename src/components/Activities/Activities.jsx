import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts, reset } from "../../features/posts/postsSlice";
import "./Posts.scss";

const Activities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivities());
    dispatch(reset());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
      <Activity />
      </div>
    </div>
  );
};

export default Activities;
