import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Profile.css"

const Profile = () => {

  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);

  console.log(user)
  const navigate = useNavigate();
  const imageUrl = "http://localhost:8080/images/users/" + user.user.image;

  const onCreate = (e) => {

    e.preventDefault();

    navigate("/updateProfile/" + id);
  }

  if (!user) {
    return <p>Cargando...</p>
  }
  return (

    <div className="profile-view">

      <div className="profile">

        <div className="profile-info">
          <h1 className="profile-name">{user.user.name}</h1>
          <img src={imageUrl} className="userimg" alt="userimg"></img>

          <button onClick={onCreate}>Editar Perfil</button>
          <span>Miembro desde Enero 2023</span>

          <span>{user.user.address}</span>
          <div className="phone-details">
          <span>(+{user.user.codephone})</span>
          <span>{user.user.telephone}</span>
          </div>
          <p>{user.user.email}</p>
        </div>
      </div>
    </div>


  );

};

export default Profile;