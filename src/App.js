import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

// import Pages

import Home from './Pages/Home';
import SingleCountry from './Pages/SingleCountry';

// import components

import NavBar from './Components/NavBar';

const App = () => {
  return(
    <Router>
      <Container>
        <Row>
          <Col>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country/:name' element={<SingleCountry/>} />
          </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App;
