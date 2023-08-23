import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import ContactUs from '../pages/Shared/ContactUs/ContactUs';

const Main = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <ScrollRestoration />
            <ContactUs />
        </div>
    );
};

export default Main;