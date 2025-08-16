import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-11/12 mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLayout;