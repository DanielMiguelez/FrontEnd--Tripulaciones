import React from 'react'
import Request from "../Request/Request"
import New from "../New/New"

import Carousel from '../Carousel/Carousel'
import Activity from '../Activities/Activity/Activity'

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