import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Kids from '../Pages/Kids';
import KidsProducts from '../Pages/KidsProducts';
import Mens from '../Pages/Mens';
import MensProducts from '../Pages/MensProducts';
import NotFoundPage from '../Pages/NotFoundPage';
import SingalProdduct from '../Pages/SingalProdduct';
import Womens from '../Pages/Womens';
import WomensProducts from '../Pages/WomensProducts';

const AllRoutes = () => {
  return (
    <Routes>
         <Route path='/'  element={<Home/>}></Route>
         <Route path='/mens' element={<Mens/>}></Route>
         <Route path='mensproducts' element={<MensProducts/>}></Route>
         <Route path='/womens'  element={<Womens/>}></Route>
         <Route path='/womensproducts' element={<WomensProducts/>}></Route>
         <Route path='/kids'  element={<Kids/>}></Route>
         <Route path='/kidsproducts' element={<KidsProducts/>}></Route>
         <Route path='/products/:id'  element={<SingalProdduct/>}></Route>
         <Route path='*'  element={<NotFoundPage/>}></Route>
 
    </Routes>
  )
}


export default AllRoutes;
