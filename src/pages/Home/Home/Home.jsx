import React from 'react';
import Slider from '../../Shared/Slider/Slider';
import WelcomePage from '../WelcomePage/WelcomePage';
import PracticeArea from '../PracticeArea/PracticeArea';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div className=''>
            <Slider />
            <WelcomePage />
            <PracticeArea />
            <ContactUs />
        </div>
    );
};

export default Home;