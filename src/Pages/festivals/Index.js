import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Index = ({ authenticate }) => {

    const [festivals, setFestivals] = useState([]);

    useEffect(() => {
        axios.get(`https://festivals-api.vercel.app/api/festivals`)

            .then(response => {
                console.log(response.data);
                setFestivals(response.data);
            })

            .catch(err => {
                console.log(err);
            });
    }, []);

    if(festivals.length === 0) return <h3>There are no festivals</h3>;

    const festivalsList = festivals.map(festival => {
        return(
            <div key={festival._id}>

                {(authenticate) ? (<p><b>Title:</b> {festival.title} </p>) : (<p><b>Title:</b><Link to={`/festivals/${festival._id}`}> {festival.title}</Link> </p>)}
                <p><b>Description:</b> {festival.description}</p>
                <hr/>
            </div>
        )
    })

    return(
        <>
            <h2>All Festivals</h2>;
            {festivalsList}
        </>
    );
};

export default Index;