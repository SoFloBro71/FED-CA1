import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';

import CountryCard from '../Components/CountryCard';
import { useParams } from 'react-router-dom/dist';
import { useLocation } from 'react-router-dom/dist';

const FilterRegion = (props) => {
    const [countriesList, setCountriesList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    const location = useLocation()

    let { region } = useParams()

    useEffect(() => {

        axios.get(`https://restcountries.com/v3.1/region/${region}?fullText=true`)
            .then(response => {
                console.log(response.data);
                setCountriesList(response.data);
                setFilteredCountries(response.data);

            })
            .catch(error => {
                console.error(error);
            });

    }, [location]);

    useEffect(() => {

        if (props.searchTerm <= 2) {
            setFilteredCountries(countriesList);
        }

        else {

            let filter = filteredCountries.filter((country) => {
                return country.region.toLowerCase().includes(props.searchTerm.toLowerCase());
            });

            setFilteredCountries(filter);
        }
    }, [countriesList, props.searchTerm]);

    let countryCards = filteredCountries.map((country, i) => {
        return <CountryCard key={i} flag={country.flags.png} name={country.name.common} region={country.region} />;
    });

    return (
        <>
            {/* <input type='text' onChange={handleChange} value={searchTerm}/> */}


            <Row className='' md={3} xs={1}>
                {countryCards}
            </Row>


        </>

    );
};

export default FilterRegion;