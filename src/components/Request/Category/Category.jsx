import React from 'react'
import { Link } from "react-router-dom";
import "./Category.css"

import buildings from "../../../assets/corporate_fare.png"
import tenis from "../../../assets/sports_tennis.png"
import park from "../../../assets/park.png"
import museum from "../../../assets/museum.png"
import hospital from "../../../assets/local_hospital.png"
import other from "../../../assets/other_houses.png"

const Category = () => {

  return (

    <div className='body-categories'>

      <span className='span-categories'>Selcciona la categoría relacionada con tu nueva petición:</span>

      <div className='all-boxes'>

        <div className='boxes-container1'>

          <div className='spandbox'>
            <Link to="/requests/create/1" > <div className='category-box' ><img src={buildings} class="index-img" alt="buildings"></img></div></Link>
            <span>Cultura</span>
          </div>
          <div className='spandbox'>
            <Link to="/requests/create/2" > <div className='category-box' ><img src={tenis} class="index-img" alt="sports"></img></div></Link>
            <span>Deportes</span>
          </div>
          <div className='spandbox'>
            <Link to="/requests/create/3" > <div className='category-box' ><img src={park} class="index-img" alt="park"></img></div></Link>
            <span>Parques y ríos</span>
          </div>
        </div>

        <div className='boxes-container2'>
          <div className='spandbox'>
            <Link to="/requests/create/4" > <div className='category-box' ><img src={museum} class="index-img" alt="museum"></img></div></Link>
            <span>Cultura</span>
            </div>
            <div className='spandbox'>
              <Link to="/requests/create/5" > <div className='category-box' ><img src={hospital} class="index-img" alt="hospital"></img></div></Link>
              <span>Sanidad</span>
            </div>
            <div className='spandbox'>
              <Link to="/requests/create/6" > <div className='category-box' ><img src={other} class="index-img" alt="other"></img></div></Link>
              <span>Otras</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Category