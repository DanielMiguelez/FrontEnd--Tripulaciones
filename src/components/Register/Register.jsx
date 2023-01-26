import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { register } from "../../features/auth/authSlice";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthdate: "",
    email: "",
    codephone: "",
    telephone: "",
    address: "",
    password: "",
  });

  const {
    name,
    surname,
    birthdate,
    email,
    codephone,
    telephone,
    address,
    password,
  } = formData;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <div className="Padre-register">
      <div className="header-register">Registrarse</div>
      <div className="register">
        <form onSubmit={onSubmit}>

          <label>Nombre Perfil</label>
          <br />

          <div className="name-surname">
          <input className="name" type="text" name="name" value={name} onChange={onChange} />
          <input className="surname"
            type="text"
            name="surname"
            value={surname}
            onChange={onChange}
          />
          </div>

          <br />
          <label>Fecha de nacimiento</label>
          <br />

          <input
            type="text"
            name="birthdate"
            value={birthdate}
            placeholder="mm-dd-yyyy"
            onChange={onChange}
          />

          <br />
          <label>Correo electrónico</label>
          <br />

          <input type="email" name="email" value={email} onChange={onChange} />
          <br />

          <label>Código</label>

          <br />
          <input
            type="text"
            name="codephone"
            value={codephone}
            onChange={onChange}
          />
          <br />

          <label>Teléfono</label>
          <br />
          <input
            type="text"
            name="telephone"
            value={telephone}
            onChange={onChange}
          />
          <br />

          <label>Dirección</label>
          <br />
          <input
            type="text"
            name="address"
            value={address}
            onChange={onChange}
          />
          <br />

          <label>Contraseña</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
          <br />
          <button type="submit">Registrate</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
