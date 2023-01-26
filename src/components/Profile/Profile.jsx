import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css"
import { logout } from "../../features/auth/authSlice";

const Profile = () => {

  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);

  console.log(user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const imageUrl = "http://localhost:8080/images/users/" + user.user.image;

  const onCreate = (e) => {

    e.preventDefault();

    navigate("/updateProfile/" + id);
  }

  const onLogout = (e) => {
    e.preventDefault()
    dispatch(logout())
    setTimeout(() => {
      navigate("/login")
    }, 3000)
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
          <Link to="/login" onClick={onLogout}>
            <button>
              Cerrar sesión
            </button>
          </Link>
          
        </div>
      </div>
    </div>


  );

};

export default Profile;