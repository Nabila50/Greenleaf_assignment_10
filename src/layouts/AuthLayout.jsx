import React from 'react';
import Navbar from '../Components/Navbar';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
 

const AuthLayout = () => {
    return (
        <div>
          <Header></Header>
          <main>
            <Outlet></Outlet>
          </main>
          <Footer></Footer>
            
        </div>
    );
};

export default AuthLayout;