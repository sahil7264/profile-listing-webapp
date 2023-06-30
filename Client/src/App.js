import './App.css';
import React from 'react';
import Nav from './components/nav';
import img from './images/img.jpg';
import Login from './components/login';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Signup from './components/signup';
import Logout from './components/logout';
import Dashboard from './components/dashboard';
import { useNavigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="txt">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;