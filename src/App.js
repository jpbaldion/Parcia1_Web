import React from 'react';
import './App.css';
import Autentificacion from './components/Autentificacion';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import RobotsList from './components/RobotsList';

function App() {
  return (
    <>
    <div className='container' style={{textAlign: "center", marginBottom: "2em"}}>
      <header>
        <h1 style={{textAlign: "center"}}>Adopta un Robot con Robot Lovers!</h1>
        <img src="image 6.png" alt="logo" />
      </header>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Autentificacion/>} />
        <Route path='/robots' element={<RobotsList/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
