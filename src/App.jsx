import React, { useReducer, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Llamamos al BrowserRouter, mas especifico a los siguientes componentes
//Me traigo el estilo de css y los distintos componentes que ya creo boostrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarWebSite from './components/Navbar/NavbarWebSite';
import AppRoutes from './routes/Routes';
import { ItemsContext, UPLOAD_ITEMS, ItemsReducer } from './context/itemsContext';


function App() {

  const initialState = [];
  const [items, dispatch] = useReducer(ItemsReducer, initialState)

  return (
    //Envolvemos toda la aplicacion con el Router

    <Router>
      <ItemsContext.Provider value={{items,dispatch}}>
        <NavbarWebSite />
        <AppRoutes />
      </ItemsContext.Provider>
    </Router>
  )
}

export default App
