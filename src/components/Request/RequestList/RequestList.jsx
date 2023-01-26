import React from 'react'
import "./RequestList.css"
import RequestsPaint from './RequestsPaint/RequestsPaint'


const RequestList = () => {
  return (
    <div className="prepaint">

      <div className='eachbox'>
        <RequestsPaint />
      </div>
    </div>

    )
}

export default RequestList