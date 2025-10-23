import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className='flex-1 max-w-6xl mx-auto w-full px-4 py-8 pb-16'>
                <Outlet />
            </main>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    );
};

export default Root;