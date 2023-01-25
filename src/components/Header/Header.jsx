import React from 'react'
import { MenuOutlined } from "@ant-design/icons"
import "./Header.css"
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className='header'>
      <div className='text'>
        Veïns Campanar
        <Link to="*"><MenuOutlined /></Link>
        
      </div>
    </div>
  )
}

export default Header