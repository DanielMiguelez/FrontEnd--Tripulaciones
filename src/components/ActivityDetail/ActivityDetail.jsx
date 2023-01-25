import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getActivityById } from '../../features/activities/activitySlice'

const ActivityDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getActivityById())
  })
  return (
    <div>ActivityDetail
        
    </div>
  )
}

export default ActivityDetail