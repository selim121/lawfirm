import React from 'react';
import adriana from '../../../assets/team/adriana.png';
import alyssa from '../../../assets/team/alyssa.png';
import andrew from '../../../assets/team/andrew.png';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';
import './Attorney.css';

const Attorney = () => {

    const members = [
        {
            name: 'Adriana Chimirel',
            designation: 'Lawyer',
            image: adriana
        },
        {
            name: 'Alyssa Warias',
            designation: 'Lawyer',
            image: alyssa
        },
        {
            name: 'Andrew Vankoughnett',
            designation: 'Lawyer',
            image: andrew
        }
    ]

    return (
        <div className='bg-[#1F2732] py-12'>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Ready to answer any questions</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Our Experienced Attorney</h1>
                    <p className="border-b-4 border-[#D1B06B] w-20 pt-2"></p>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {
                        members.map((member, index) => <div key={index} className='card-bg bg-[#161D27]  p-4 rounded-lg mb-8 lg:mb-0 md:me-8 cursor-pointer'>
                            <div className="relative w-[300px] h-full overflow-hidden rounded-lg">
                                <img src={member.image} className="w-full h-full bg-[#000000] rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                <h3 className="text-white text-2xl font-semibold">{member.name}</h3>
                                <p className="text-[#D1B06B]">{member.designation}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className="mt-12 flex flex-row items-center justify-center">
                    <Link to={'/team-members'} ><Button name={'See More'} /></Link>
                </div>
                <div className="my-28 border-b-4 border-[#D1B06B]"></div>
            </div>
        </div>
    );
};

export default Attorney;