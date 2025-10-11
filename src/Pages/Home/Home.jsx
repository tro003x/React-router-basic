// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../Component/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {

    const data = useLoaderData();
    console.log(data)
   

    return (
        <div>
            <Banner />
            <Books/>
        </div>
    );
};

export default Home;
