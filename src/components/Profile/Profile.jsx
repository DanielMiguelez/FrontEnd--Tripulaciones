import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css"

const Profile = () => {

  const { user } = useSelector((state) => state.auth);

  console.log(user)

  const imageUrl = "http://localhost:8080/images/users/" + user.user.image;

  return (

    <div className="profile-view">

      <div className="profile">

        <div className="profile-info">
          <h1 className="profile-name">{user.user.name}</h1>

          <img src={imageUrl} className="userimg" alt="userimg"></img>

          <p>{user.user.email}</p>
        </div>
      </div>
    </div>


  );

};

export default Profile;