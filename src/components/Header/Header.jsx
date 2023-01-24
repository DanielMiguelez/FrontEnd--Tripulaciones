import React from 'react'
import { MenuOutlined } from "@ant-design/icons"
import "./Header.css"



const Header = () => {
  return (
    <div className='header'>
      <div className='text'>
        Veïns Campanar
        <MenuOutlined />
      </div>
    </div>
  )
}

export default Header