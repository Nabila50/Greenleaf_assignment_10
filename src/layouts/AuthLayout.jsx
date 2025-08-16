import React from 'react';
import Navbar from '../Components/Navbar';
import Header from './Header';
import { Outlet } from 'react-router';
 

const AuthLayout = () => {
    return (
        <div>
          <Header>
            <Navbar></Navbar>
          </Header>
          <main>
            <Outlet></Outlet>
          </main>
            
        </div>
    );
};

export default AuthLayout;