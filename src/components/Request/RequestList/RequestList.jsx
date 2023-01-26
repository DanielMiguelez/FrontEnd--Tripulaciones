import React from 'react'
import { useNavigate } from "react-router-dom";
import "./RequestList.css"
import RequestsPaint from './RequestsPaint/RequestsPaint'


const RequestList = () => {

  const navigate = useNavigate();

  const onSubmit = (event) => {

    navigate("/requests/category")

};

  return (
    <div className="prepaint">

      <button onClick={onSubmit}>Nueva</button>

      <div className='eachbox'>

        <RequestsPaint />
      </div>
    </div>

    )
}

export default RequestList