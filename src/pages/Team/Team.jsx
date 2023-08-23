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
        <div id='welcome' className='bg-[#30122A] py-12'>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Meet our</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Law Firm Family</h1>
                    <p className="border-b-4 border-[#802e6f] w-20 pt-2"></p>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {
                        members.map((member, index) => <div key={index} className='bg-shadow bg-[#391432]  p-4 rounded-lg mb-8 lg:mb-0 md:me-8 cursor-pointer'>
                            <div className="relative w-[300px] h-full overflow-hidden rounded-lg">
                                <img src={member.image} className="w-full h-full bg-[#000000] rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                            <div className="flex flex-col items-center justify-center mt-4">
                                <h3 className="text-white text-2xl font-semibold">{member.name}</h3>
                                <p className="text-white opacity-70">{member.designation}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;