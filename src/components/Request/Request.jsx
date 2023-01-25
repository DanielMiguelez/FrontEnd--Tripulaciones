import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createRequest } from "../../features/requests/requestSlice";
import "./Request.css";

const Request = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  
  const onSubmit = (event) => {
    
    event.preventDefault();

    const formData = new FormData(event.target);

    const requestCreated = Object.fromEntries(formData.entries());

    const test = { id, requestCreated }

    console.log(test)

    dispatch(createRequest(test));

};

  return (
    <div className="requests-container">
      <div className="header-request">Crear petición</div>
      
        <form onSubmit={onSubmit}>

       
          <input className="name" type="text" name="name"  placeholder="Añadir un título" />
          

          <input
            type="text"
            name="requestbody"
            placeholder="Describir los detalles de tu petición"
          />

          <br />

          <input type="file" name="image" />
         
          <br />
          <input
            type="text"
            name="address"
            placeholder="Añadir ubicación"
          />
          <br />
          <button type="submit">Registrate</button>
        </form>
      </div>
    
  );
};

export default Request;
