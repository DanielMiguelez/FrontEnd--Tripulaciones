import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../features/auth/authSlice";
import "./Login.css"

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: '',

    password: ''

  })

  const { email, password } = formData

  const dispatch = useDispatch();

  const onChange = (e) => {

    setFormData((prevState) => ({

      ...prevState,

      [e.target.name]: e.target.value,

    }))

  }

  const onSubmit = (e) => {

    e.preventDefault()
    dispatch(login(formData));
    navigate("/");
  }

  return (

    <div className='login-container'>

      <h2 className='login-h2'>Bienvenido a Veins Campanar</h2>

      <span className='sub-login'>Accede o registrate para continuar</span>

      <form className='login-form' onSubmit={onSubmit}>
        <div className='email-box'>
          <label for="email">Email</label>
          <input className="email" type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className='password-box'>
          <span>Example@example.com</span>
          <label for="password">Contraseña</label>
          <input className="password" type="password" name="password" value={password} onChange={onChange} />
        </div>

        <div className='login-buttons'>

          <button className='access-button' type="submit">Acceder</button>

          <Link to="/register" ><button className='createAcc-button' >Crear cuenta</button></Link>

        </div>
      </form>

      <span className='pass-recover'>¿Olvidaste la contraseña?</span>
      <span className='pass-recovery'>Recupérala aquí</span>

    </div>

  )
}

export default Login