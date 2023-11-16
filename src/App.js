import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// import Pages

import Home from './Pages/Home';
import FestivalsIndex from './Pages/festivals/Index';
import FestivalsShow from './Pages/festivals/Show';
import FestivalsCreate from './Pages/festivals/Create';
import FestivalsEdit from './Pages/festivals/Edit';
import PageNotFound from './Pages/festivals/PageNotFound';


// import components

import NavBar from './Components/NavBar';

const App = () => {

  const [authenticated, setAuthenticated] = useState(false);

  let protectedRoutes;

  useEffect(() => {
    if(localStorage.getItem('token')){
      setAuthenticated(true);
    }
  }, []);

  const onAuthenticated = (auth, token) => {
    setAuthenticated(auth);

    if (auth){
      localStorage.setItem('token', token);
    }
    else{
      localStorage.removeItem('token');
    }
  }

  if(authenticated){
    protectedRoutes = (
      <>

        <Route path='/festivals/create' element={<FestivalsCreate/>} />
        <Route path='/festivals/:id/edit' element={<FestivalsEdit/>} />
        <Route path='/festivals/:id' element={<FestivalsShow/>} />
      </>
      )
    }
    // else {
    //   <>
    //     <Route path='/festivals/create' element={<Navigate to="/" />} />
    //     <Route path='/festivals/:id/edit' element={<Navigate to="/" />} />
    //     <Route path='/festivals/:id' element={<Navigate to="/" />} />
      
    //   </>
    // }

  return(
    <Router>
      <NavBar authenticated={authenticated} onAuthenticated={onAuthenticated} />
      <Routes>
        <Route path='/' element={<Home authenticated={authenticated} onAuthenticated={onAuthenticated}/>} />
        <Route path='/festivals' element={<FestivalsIndex authenticated={authenticated} onAuthenticated={onAuthenticated}/>} />
        {protectedRoutes}
{/* 
        <Route path='/festivals/:id' element={(authenticated) ? (<FestivalsShow/>) : (<Navigate to="/" />)} />
        <Route path='/festivals/:id/edit' element={(authenticated) ? (<FestivalsEdit/>) : (<Navigate to="/" />)} />
        <Route path='/festivals/create' element={(authenticated) ? (<FestivalsCreate/>) : (<Navigate to="/" />)} /> */}


        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
