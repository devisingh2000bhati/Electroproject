import React from 'react';
import './App.css';
import Login from "./loginpage/Login"
import Signup from './Signup/Signup';
import Home from './home/Home';
import { Routes ,Route } from 'react-router-dom';
function App() {
  return (
   <>
   <Routes>
    <Route path='/' Component={Login}/>
    <Route path='/SignUp' Component={Signup} />
    <Route path='/Home' Component={Home} />
   </Routes>
  
   </>
  );
}

export default App;
