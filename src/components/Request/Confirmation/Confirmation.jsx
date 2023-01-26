import React from 'react'
import { Link } from "react-router-dom";
import check from "../../../assets/check_circle_outline.png"
import "./Confirmation.css"

const Confirmation = () => {

  return (

    <div className='confirmation-container'>

      <img src={check} class="" alt="sports"></img>
      <div className='first-box'>

      <span className='first-span'>Tu petición se ha enviado correctamente</span>

      <span className='second-span'>La Asociación de vecinos de Campanar atenderá tu petición lo antes posible.</span>
      </div>

      <Link to="/requests/list" ><button className='return'>Volver</button></Link>

    </div>

  )
}

export default Confirmation