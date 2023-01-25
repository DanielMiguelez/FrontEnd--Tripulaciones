import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll } from '../../../features/news/newSlice';

const New = () => {
  const {news, isLoading} = useSelector(state => state.news)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll())
   }, []); 

   const newN = news.map((a) => {
    if (isLoading){
      return <h1>cargando...</h1>
    }
    
    return (
      <div className="newN">
        {a.title}
        <br />
        {a.body}
      </div>
    );
  });

  return <div>{newN}</div>;
};

export default New;