import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Show = () => {

    const {id} = useParams();
    const [festival, setFestival] = useState(null);

    let token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data);
                setFestival(response.data);
            })

            .catch(err => {
                console.log(err);
            });
    }, [id, token])

    if(!festival) return <h3>Festival not Found</h3>

    return(
        <>
            <h2>Festival: {id}</h2>
            <div>
                <p><b>Title:</b> {festival.title} </p>
                <p><b>Description:</b> {festival.description}</p>
                <hr/>
            </div>
        </>
    )
}

export default Show;