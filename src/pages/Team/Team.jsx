import React from 'react';
import adriana from '../../assets/team/adriana.png';
import alyssa from '../../assets/team/alyssa.png';
import andrew from '../../assets/team/andrew.png';
import ashley from '../../assets/team/ashley.png';
import brent from '../../assets/team/brent.png';
import christi from '../../assets/team/christi.png';
import david from '../../assets/team/david.png';
import julie from '../../assets/team/julie.png';
import mia from '../../assets/team/mia.png';
import nandishi from '../../assets/team/nandishi.png';
import robert from '../../assets/team/robert.png';
import william from '../../assets/team/william.png';
import './Team.css';

const Team = () => {

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
        },
        {
            name: 'Ashley Kennedy',
            designation: 'Managing Clerk',
            image: ashley
        },
        {
            name: 'Brent Mendiala',
            designation: 'Lawyer',
            image: brent
        },
        {
            name: 'Christi Kay',
            designation: 'Client Manager',
            image: christi
        },
        {
            name: 'David Rappaport',
            designation: 'Lawyer',
            image: david
        },
        {
            name: 'Julie Stanchieri',
            designation: 'Partner',
            image: julie
        },
        {
            name: 'Mia Asido',
            designation: 'Law Clerk',
            image: mia
        },
        {
            name: 'Nandishi Bekah',
            designation: 'Lawyer',
            image: nandishi
        },
        {
            name: 'Robert Milley',
            designation: 'Senior Clerk',
            image: robert
        },
        {
            name: 'William Francis',
            designation: 'Lawyer',
            image: william
        },
    ]

    return (
        <div className='bg-[#1F2732] py-12'>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Meet our</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Law Firm Family</h1>
                    <p className="border-b-4 border-[#D1B06B] w-20 pt-2"></p>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {
                        members.map((member, index) => <div key={index} className='card-bg bg-[#161D27]  p-4 rounded-lg mb-8 lg:mb-0 md:me-8 cursor-pointer'>
                            <div className="relative w-[300px] h-full overflow-hidden rounded-lg">
                                <img data-aos="zoom-in-down" data-aos-easing="ease-in-cubic" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" src={member.image} className="w-full h-full bg-[#000000] rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                <h3 className="text-white text-2xl font-semibold">{member.name}</h3>
                                <p className="text-[#D1B06B]">{member.designation}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;