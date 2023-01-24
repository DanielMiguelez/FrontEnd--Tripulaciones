import React from 'react'
import Carousel from '../Carousel/Carousel'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Carousel />
      <p>Espacio de difusión y colaboración entre los vecinos del barrio y su Asociación.</p>
  
      <Link to="/request">Peticiones</Link>
      <Link to="/new">Noticias</Link>
      <Link to="/activities">Actividades</Link>
      
    </div>
  )
}

export default Home