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
    if (event.target.image.files[0]) formData.set('image', event.target.image.files[0]);
    
    const test = { id,requestCreated }
    
    console.log(test)

    dispatch(createRequest(test));

};

  return (
    <div className="requests-container">
      <div className="header-request">Crear petición</div>
      
        <form onSubmit={onSubmit}>

       
          <input className="name" type="text" name="title"  placeholder="Añadir un título" />
          

          <textarea rows={4} className="textarea" name="body" resize="none"/>

          <br />

          <input type="file" name="image" />
         
          <br />
          <input
            type="text"
            name="address"
            placeholder="Añadir ubicación"
          />
          <br />
          <button type="submit">Crear</button>
        </form>
      </div>
    
  );
};

export default Request;
