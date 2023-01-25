import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import "./Category.css"

const Category = () => {

  const navigate = useNavigate();

  return (

    <div className='body-categories'>

      <span className='span-categories'>Selecciona la categoría relacionada con tu nueva petición:</span>

      <div className='all-boxes'>

        <div className='boxes-container1'>
          <Link to="/requests/create/1" > <div className='category-box' ><img></img></div></Link>

          <Link to="/requests/create/2" > <div className='category-box' ><img></img></div></Link>

          <Link to="/requests/create/3" > <div className='category-box' ><img></img></div></Link>
        </div>

        <div className='boxes-container2'>
          <Link to="/requests/create/4" > <div className='category-box' ><img></img></div></Link>

          <Link to="/requests/create/5" > <div className='category-box' ><img></img></div></Link>

          <Link to="/requests/create/6" > <div className='category-box' ><img></img></div></Link>
        </div>
        
      </div>
    </div>
  )
}

export default Category