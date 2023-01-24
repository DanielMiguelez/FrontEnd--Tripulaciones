import React from 'react'
import Request from "../Request/Request"
import New from "../New/New"
import Activity from "../Activity/Activity"
import Carousel from '../Carousel/Carousel'

const Home = () => {
  return (
    <div>
      <Carousel />
      <p>Espacio de difusión y colaboración entre los vecinos del barrio y su Asociación.</p>
      < Request />
      < New />
      < Activity />
    </div>
  )
}

export default Home