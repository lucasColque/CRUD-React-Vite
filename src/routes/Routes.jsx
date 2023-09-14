import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import ShowProducts from '../pages/ShowProducts';



const AppRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<CreateProduct />} />
                <Route path='/list' element={<ShowProducts />} />
            </Routes>
    )
}

export default AppRoutes