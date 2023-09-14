import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Llamamos al BrowserRouter, mas especifico a los siguientes componentes
//Me traigo el estilo de css y los distintos componentes que ya creo boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarWebSite from './components/Navbar/NavbarWebSite';
import AppRoutes from './routes/Routes';



function App() {
  return (
//Envolvemos toda la aplicacion con el Router
    <Router>
      <NavbarWebSite />
      <AppRoutes />
    </Router>
  )
}

export default App
