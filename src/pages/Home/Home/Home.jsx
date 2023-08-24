import React from 'react';
import Slider from '../../Shared/Slider/Slider';
import WelcomePage from '../WelcomePage/WelcomePage';
import Attorney from '../Attorney/Attorney';
import Areas from '../Areas/Areas';

const Home = () => {
    return (
        <div className=''>
            <Slider />
            <WelcomePage />
            <Areas />
            <Attorney />
        </div>
    );
};

export default Home;