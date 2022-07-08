import React from "react";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './Header/Header';
import { Wishlist } from './Wishlist/Wishlist';
import { Private } from './Private/Private';
import { Add } from './Add/Add';
import './Home.css';
import '../lib/font-awesome/css/all.min.css';

function Home() {
  return (
    <>
    {/* Keeping All the files for Home here . */}
    <Router>
        <Header />
    <Routes>
        <Route exact path="/wishlist" element={ <Wishlist/> } />
        <Route path="add" element={ <Add/> } />
        <Route path="private" element={ <Private/> } />
    </Routes>
    </Router>
      {/* On login it redirects to page localhost:3000/ and loads the Header as well. 
      <h1>Login Redirect Successfull.</h1> //We'll hide the main page and return the pages needed here. */}
      {/* The main redirected page on Home component is Wishlist Page. */}

    </>
  );
}

export default Home;