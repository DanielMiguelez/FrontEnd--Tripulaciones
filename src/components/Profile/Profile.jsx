import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { logout } from "../../features/auth/authSlice";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"

const Profile = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);

  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const imageUrl = "http://localhost:8000/images/users/" + user.user.image;

  const onCreate = (e) => {
    e.preventDefault();

    navigate("/updateProfile/" + id);
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());

    navigate("/");
  };

  if (!user) {
    return <p>Cargando...</p>;
  }
  return (
    <div className="profile-view">
      <div className="profile">
        
          <div className="profile-info">
           
            <img src={imageUrl} className="userimg"></img>
            <h1 className="profile-name">{user.user.name}</h1>

          </div>
          
          <button onClick={onCreate} className="buttonedit">Editar Perfil</button>

          <span className="member"><HomeOutlined />Miembro desde Enero 2023</span>

          <span>{user.user.address}</span>

          <div className="phone-details">
          <PhoneOutlined />
            <span>(+{user.user.codephone})</span>
            <span>{user.user.telephone}</span>
          </div>
          <br />
          <div className="email"><MailOutlined />{user.user.email}</div>
          <Link to="/">
            <button onClick={onLogout}>Cerrar sesión</button>
          </Link>
        </div>
      </div>
    
  );
};

export default Profile;
