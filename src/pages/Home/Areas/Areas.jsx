import React from 'react';
import arbitration from '../../../assets/practice-area/arbitration.jpeg';
import bankruptcy from '../../../assets/practice-area/bankruptcy.jpeg'
import corporate from '../../../assets/practice-area/corporate.jpeg';
import estatePlanning from '../../../assets/practice-area/estate-planning.jpeg';
import { Link } from 'react-router-dom';
import './Areas.css';
import Button from '../../Shared/Button/Button';


const Areas = () => {

    const practiceAreas = [
        {
            title: "Arbitration Law",
            img: arbitration
        },
        {
            title: "Bankruptcy Law",
            img: bankruptcy
        },
        {
            title: "Corporate Law",
            img: corporate
        },
        {
            title: "Estate Planning Law",
            img: estatePlanning
        }
    ]

    return (
        <div className='bg-[#1F2732] py-12'>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="my-28 border-b-4 border-[#D1B06B]"></div>
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Know our</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Practice Area</h1>
                    <p className="border-b-4 border-[#D1B06B] w-20 pt-2"></p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {
                        practiceAreas.map((practiceArea, index) => <Link to={`${practiceArea.title.slice(0, practiceArea.title.indexOf(' '))}`} key={index} className="card-bg bg-[#161D27] cursor-pointer p-4 flex flex-col items-center justify-center">
                            <div className="bg-[#1F2732] p-4 rounded-2xl">
                                <div className="relative w-48 h-40 opacity-70 rounded-2xl overflow-hidden ">
                                    <img src={practiceArea.img} className="w-full h-full rounded-2xl object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                                </div>
                                <h3 className="text-white text-xl text-center hover:opacity-60 mt-5">{practiceArea.title}</h3>
                            </div>
                        </Link>)
                    }
                </div>
                <div className="mt-12 flex flex-row items-center justify-center">
                    <Link to={'/practice-areas'} ><Button name={'See More'} /></Link>
                </div>
                <div className="pt-28 pb-12 border-b-4 border-[#D1B06B]"></div>
            </div>
        </div>
    );
};

export default Areas;