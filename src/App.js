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
        <h1 style={{textAlign: "center", padding: "1em", fontWeight: "700", textShadow: '0 2px 4px #00000040'}}>Adopta un Robot con Robot Lovers!</h1>
        <hr style={{boxShadow: '0 2px 4px #00000040'}}/>
        <img src="image 6.png" alt="logo" style={{width: '100%'}} />
        <hr style={{boxShadow: '0 2px 4px #00000040'}}/>
      </header>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Autentificacion/>} />
        <Route path='/robots' element={<RobotsList/>} />
      </Routes>
    </BrowserRouter>
    <footer>
      <p style={{textAlign: "center", padding: "1em"}}>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
    </footer>
    </>
  );
}

export default App;
