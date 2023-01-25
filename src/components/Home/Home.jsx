import React from "react";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import "./Home.css"
import { CommentOutlined, FormOutlined, CalendarOutlined } from '@ant-design/icons';
const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="text-home">
        <p>
          Espacio de difusión y colaboración entre los vecinos del barrio y su
          Asociación.
        </p>
      </div>

      <div className="iconos-home">
        <Link to="/requests/category" > <CommentOutlined style={{ fontSize: '250%' }} /> <br /> <span>Peticiones</span></Link>
        <Link to="*" > <CommentOutlined style={{ fontSize: '250%' }} /> <br /> <span>Peticiones</span></Link>
        <Link to="/news"> <FormOutlined style={{ fontSize: '250%' }} /> <br /> <span>Noticias</span> </Link>
        <Link to="/activities"> <CalendarOutlined style={{ fontSize: '250%', border: '1px' }} /> <br /> <span>Actividades </span> </Link>
      </div>
    </div>
  );
};

export default Home;
