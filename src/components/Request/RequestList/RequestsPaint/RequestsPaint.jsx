import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./RequestsPaint.css";
import { getAll } from '../../../../features/requests/requestSlice';

const RequestsPaint = () => {
    const { requests, isLoading } = useSelector(state => state.requests)
    console.log(requests)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll())
    }, []);

    const requestN = requests.map((a) => {

        if (isLoading) {
            return <h1>cargando...</h1>
        }

        const imageUrl = "http://localhost:8000/images/requests/" + a.image;

        return (

            <div className='requestslist-container'>

                <div className="requestsmap-box">
                    {a.title}
                    <br />
                    {a.body}
                    <br />
                    {a.address}
                    <br />
                    <img  className='requests-pics' src={imageUrl} />
                </div>
            </div>
        );
    });

    return <div>{requestN}</div>;
};

export default RequestsPaint;