import React from 'react';
import arbitration from '../../assets/practice-area/arbitration.jpeg';
import bankruptcy from '../../assets/practice-area/bankruptcy.jpeg'
import corporate from '../../assets/practice-area/corporate.jpeg';
import estatePlanning from '../../assets/practice-area/estate-planning.jpeg';
import litigation from '../../assets/practice-area/litigation.jpeg';
import mediation from '../../assets/practice-area/mediation.jpeg';
import parenting from '../../assets/practice-area/parenting.jpeg';
import tax from '../../assets/practice-area/tax.jpeg';
import tort from '../../assets/practice-area/tort.jpeg';
import collaborative from '../../assets/practice-area/collaborative.webp';
import company from '../../assets/practice-area/company.webp';
import labour from '../../assets/practice-area/labour.webp';
import './PracticeArea.css';
import { Link } from 'react-router-dom';

const PracticeArea = () => {

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
        },
        {
            title: "Litigation Law",
            img: litigation
        },
        {
            title: "Mediation Law",
            img: mediation
        },
        {
            title: "Parenting Law",
            img: parenting
        },
        {
            title: "Tax Law",
            img: tax
        },
        {
            title: "Tort Law",
            img: tort
        },
        {
            title: "Collaborative Law",
            img: collaborative
        },
        {
            title: "Company Law",
            img: company
        },
        {
            title: "Labour Law",
            img: labour
        },
    ]

    return (
        <div className='bg-[#1F2732] py-12'>
            <div className="max-w-screen-xl mx-auto">
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
            </div>
        </div>
    );
};

export default PracticeArea;