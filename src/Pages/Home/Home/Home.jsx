import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Art Of Defense | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            
        </div>
    );
};

export default Home;