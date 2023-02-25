import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddressPage from '../Pages/AddressPage';
import CartPage from '../Pages/CartPage';
import Home from '../Pages/Home';
import Kids from '../Pages/Kids';
import KidsProducts from '../Pages/KidsProducts';
import Mens from '../Pages/Mens';
import MensProducts from '../Pages/MensProducts';
import MensSingalPage from '../Pages/MensSingalPage';
import NotFoundPage from '../Pages/NotFoundPage';
import SingalProdduct from '../Pages/SingalProdduct';
import Womens from '../Pages/Womens';
import WomensProducts from '../Pages/WomensProducts';
import WomensSingalPage from '../Pages/WomensSingalPage';

const AllRoutes = () => {
  return (
    <Routes>
         <Route path='/'  element={<Home/>}></Route>
         <Route path='/mens' element={<Mens/>}></Route>
         <Route path='mensproducts' element={<MensProducts/>}></Route>
            <Route path='/mensproducts/:id' element={<MensSingalPage/>}></Route>
         <Route path='/womens'  element={<Womens/>}></Route>
         <Route path='/womensproducts' element={<WomensProducts/>}></Route>
         <Route path='/womensproducts/:id' element={<WomensSingalPage/>}></Route>
         <Route path='/kids'  element={<Kids/>}></Route>
         <Route path='/kidsproducts' element={<KidsProducts/>}></Route>
         
         <Route path='/products/:id'  element={<SingalProdduct/>}></Route>
         <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/addresspage' element={<AddressPage/>}></Route>
         <Route path='*'  element={<NotFoundPage/>}></Route>
 
    </Routes>
  )
}


export default AllRoutes;
