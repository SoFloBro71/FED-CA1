import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import Pages

import Home from './Pages/Home';
import FestivalsIndex from './Pages/festivals/Index';
import FestivalsShow from './Pages/festivals/Show';


// import components

import NavBar from './Components/NavBar';

const App = () => {
  return(
    <Routes>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/festivals' element={<FestivalsIndex/>} />
        <Route path='/festivals/:id' element={<FestivalsShow/>} />
      </Routes>
    </Routes>
  )
}

export default App;
