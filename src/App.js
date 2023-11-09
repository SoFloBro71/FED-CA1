import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { useState } from 'react';


//import components
import Navbar from './Components/NavBar';

//import pages
import Home from './Pages/Home';
import SingleCountry from './Pages/SingleCountry';
import FilterRegion from './Pages/FilterRegion';

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const onHandleChange = (e) => {
    setSearchTerm(e.target.value);
  }


  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <Navbar onHandleChange={onHandleChange} searchTerm={searchTerm}/>
            <Routes>
              <Route path='/' element={<Home searchTerm={searchTerm} />} />
              <Route path='/country/:name' element={<SingleCountry />} />
              <Route path='/region/:region' element={<FilterRegion searchTerm={searchTerm} />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
