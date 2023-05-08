import './App.css';
//--------- ^^ css ^^ ----------------

import { Routes, Route, useLocation } from 'react-router-dom';

// ------------ React ----------------
import {Provider } from 'react-redux'
import store from './Redux/store'

import Landing from './Landing/Landing';
import NotFound from './Landing/NotFound/NotFound';
// import Home from './Landing/Home/Home';
import NavBar from './Landing/Home/NavBar/NavBar';
import Cards from './Landing/Cards/Cards';
import Detail from './Landing/Detail/Detail';
import CreateDog from './Landing/CreateDog/CreateDog';

import CardsSearch from './Landing/Search/CardsSearch';
// ------------ components -----------

function App() {

  const location = useLocation();
  console.log(location.pathname);


  return (
    <div className="App">

      {location.pathname !== "/" && <NavBar /> }
      <Provider store={store} >
      <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path="/search" element={<CardsSearch/>} />
        <Route exact path="/home" element={<Cards />}/>
        <Route exact path= "/dogs/:idRaza" element={<Detail/>} />
        <Route exact path="/dogs/create" element={<CreateDog/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
      </Provider>

    </div>
  );
}

export default App;
