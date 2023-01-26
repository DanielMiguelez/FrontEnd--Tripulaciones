import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createRequest } from "../../features/requests/requestSlice";
import "./Request.css";

const Request = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const onSubmit = (event) => {
    
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    const requestCreated = Object.fromEntries(formData.entries());
    if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
    
    const test = { id,requestCreated }
    
    console.log(test)

    dispatch(createRequest(test));

    navigate("/requests/confirmation")

};

  return (
    <div className="requests-container">

      <div className="header-request">Crear petición</div>

      <input className="name" type="text" name="title"  placeholder="Añadir un título" />
      <br />
        <form onSubmit={onSubmit}>
          <textarea rows={4} className="textarea" name="body" resize="none"/>

          <br />

          <input className="file" type="file" name="image" />
         
          <br />
          <input
          className="location"
            type="text"
            name="address"
            placeholder="Añadir ubicación"
          />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    
  );
};

export default Request;
