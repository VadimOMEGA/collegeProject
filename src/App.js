import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar, Footer, EnterAdmin } from './components'
import { HomePage, CartPage, WishlistPage, ProductDetailsPage, ContactPage, ProductsPage, SignUpPage, LogInPage, CheckOutPage, AdminPage, AdminEdit, AdminCreate } from "./pages"

import { useDispatch } from 'react-redux';
import { checkSession } from './utils/auth';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

import './App.css';
import { jwtDecode } from 'jwt-decode';

const App = () => {

  const dispatch = useDispatch();
  const[isAdmin, setIsAdmin] = useState(0);
  
  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  let token = useSelector((state) => state.token); 

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      setIsAdmin(decodedToken.isAdmin);
    }
  }, [token]);

  console.log(isAuthenticated, token);
  
  
  return (
    <BrowserRouter>
        {
          isAuthenticated && parseInt(isAdmin) === 1 && <EnterAdmin /> 
        }
        <NavBar />

        <Routes>
          <Route path='/' exact element = {<HomePage/>}/>
          <Route path='/contact' element = {<ContactPage/>}/>
          <Route path='/products/:searchTerm?/:filter?' element = {<ProductsPage/>}/> 
          <Route path='/signup' element = {<SignUpPage/>}/>
          <Route path='/login' element = {<LogInPage/>}/>
          <Route path='/wishlist' element = {<WishlistPage/>}/>
          <Route path='/cart' element = {<CartPage/>}/>
          <Route path='/product/:id' element = {<ProductDetailsPage />}/>
          <Route path='/checkout' element = {<CheckOutPage />}/>
          <Route path='/admin' element = {<AdminPage />}/>
          <Route path='/admin/edit/:id' element = {<AdminEdit />}/>
          <Route path='/admin/create' element = {<AdminCreate />}/>
        </Routes>

        <Footer />

    </BrowserRouter>
)};

export default App;