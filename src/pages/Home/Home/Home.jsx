import React from 'react';
import Slider from '../../Shared/Slider/Slider';
import WelcomePage from '../WelcomePage/WelcomePage';
import ContactUs from '../../Shared/ContactUs/ContactUs';

const Home = () => {
    return (
        <div className=''>
            <Slider />
            <WelcomePage />
            <ContactUs />
        </div>
    );
};

export default Home;