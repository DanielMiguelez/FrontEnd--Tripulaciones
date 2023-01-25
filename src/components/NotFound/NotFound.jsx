import React from 'react'
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='notFound'>
    <Result
      status="404"
      title="404"
      subTitle="Disculpa, estamos construyendo la página."
      extra={<Button type="primary" htmlType="submit" style={{
        border: "2px solid lightGray",
        background: "transparent",
        color: "#47311d",
        fontFamily:'M PLUS Rounded 1c',
      }}>
        <Link to="/">Volver</Link>
      </Button>}
    />
  </div>
  )
}

export default NotFound