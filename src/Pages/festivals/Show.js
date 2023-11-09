import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Show = () => {

    const {id} = useParams();
    const [festival, setFestival] = useState(null);

    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im4wMDIxMTAxM0BpYWR0LmllIiwiZnVsbF9uYW1lIjoiSGFubmFoIiwiX2lkIjoiNjU0Y2NlNmM1NmEwMWUwMDA4OGE2YTUwIiwiaWF0IjoxNjk5NTMyNDAxfQ.iKbrcWuCSoP-dp_5dYjcFXZHtHR68teMFyiDDxChEzU`
            }
        })
            .then(response => {
                console.log(response.data);
                setFestivals(response.data);
            })

            .catch(err => {
                console.log(err);
            });
    }, [])

    if(!festival) return <h3>Festival not Found</h3>;

    return(
        <>
            <h2>Festival: {id}</h2>
            <div>
                <p><b>Title:</b> {festival.title} </p>;
                <p><b>Description:</b> {festival.description}</p>;
                <hr/>
            </div>
        </>
    )
}

export default Show;