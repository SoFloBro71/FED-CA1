import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Spinner, Image } from "react-bootstrap";

const SingleCountry = () => {

    let { name } = useParams();

    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(response => {
                setCountry(response.data[0]);

                console.log(Object.values(response.data[0].currencies));
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    if(!country){
        return(
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    return(
        <Row>
            <Col>
                <Image src={country.flags.png} />
            </Col>

            <Col>
            <p><b>Official Name:</b> {country.name.official}</p>
            <p><b>Common Name:</b> {country.name.common}</p>
            <p><b>Region:</b> {country.region}</p>
            <p><b>Sub Region:</b> {country.subregion}</p>

            {/* <p><b>Currency:</b> {Object.keys(country.currencies)[0]}</p> */}
            <p><b>Currency:</b> {Object.values(country.currencies)[0].name}</p>

            </Col>

        </Row>
    )
}

export default SingleCountry;