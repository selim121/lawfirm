import React from 'react';
import './WelcomePage.css';
import img1 from '../../../assets/home/1.jpeg';
import amit from '../../../assets/home/amit.jpeg';
import about from '../../../assets/others/about-me.png';
import Button from '../../Shared/Button/Button';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div id='welcome' className='bg-[#30122A]'>
            <div className="max-w-screen-xl mx-auto py-12">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Welcome to</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Law Firm Family</h1>
                    <p className="border-b-4 border-[#802e6f] w-20 pt-2"></p>
                </div>
                <div className="flex flex-col lg:flex-row items-center px-4 mt-20">
                    <div className='bg-shadow bg-[#30122A] w-full md:w-1/3 p-4 rounded-lg mb-8 lg:mb-0 md:me-8'>
                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                            <img src={img1} className="w-full h-full rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                        </div>
                    </div>
                    <div className="text-white 'w-full md:w-2/3 px-4">
                        <h1 className="text-3xl md:text-5xl uppercase tracking-wider">Your Trusted Path Finder</h1>
                        <p className="border-b-4 border-[#802e6f] w-20 pt-5"></p>
                        <p className="pt-5 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum accusamus libero deleniti voluptas error beatae consequuntur, fuga soluta debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam ratione necessitatibus sint. Beatae voluptatem maxime culpa facere, esse fuga?</p>
                        <div className="mt-8">
                            <Link to={'/team-members'} ><Button name={'Learn More'} /></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-shadow p-6 my-36 relative">
                    <h3 className="text-sm md:text-2xl text-white uppercase tracking-wider absolute left-10 lg:left-1/2 -top-4 bg-[#3c1735] p-4 bg-shadow">Embracing Change Together</h3>
                    <div className="flex flex-col lg:flex-row items-center p-4 bg-[#280a22]">
                        <div className='bg-shadow bg-[#30122A] p-4 rounded-full my-8 lg:my-0 lg:me-8'>
                            <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full">
                                <img src={amit} className="w-full h-full rounded-full object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-white opacity-80 text-justify">
                                <span className="text-[#802e6f] font-bold">&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore, iste non sunt quasi tempore quia enim vel ratione distinctio porro eaque hic id impedit magni omnis reiciendis incidunt eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi officiis impedit fuga deleniti consequuntur dolorum reprehenderit at tenetur culpa nisi, cupiditate possimus excepturi reiciendis quaerat architecto unde ullam tempora aperiam ab explicabo aliquid corrupti iusto aut totam. Ipsam, fuga deleniti.<span className="text-[#802e6f] font-bold">&quot;</span>
                            </p>
                            <div className="mt-4">
                                <h3 className="text-3xl text-white">Andrew Vankoughnett</h3>
                                <p className="text-white opacity-70 text-sm">Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-img bg-fixed">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="py-4 border-l-[20px] border-e-[20px] w-80 md:w-96 border-[#30122A] text-[#802e6f] font-bold text-3xl text-center uppercase">Lorem ipsum dolor</h2>
                        <div className="bg-[#30122A] w-80 md:w-96 text-center rounded-ee-xl rounded-es-xl">
                            <p className="text-justify text-white opacity-60 p-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eum inventore exercitationem esse quos aut assumenda porro natus maiores. Odio, velit. Minus similique temporibus iure quae repudiandae placeat impedit soluta!</p>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex flex-row justify-start">
                                <h2 className="px-4 border-t-[20px]  h-46 border-[#30122A] text-[#802e6f] font-bold text-3xl text-center uppercase"></h2>
                                <div className="bg-[#30122A] w-96 text-center rounded-ee-xl rounded-es-xl rounded-se-xl">
                                    <p className="text-justify text-white opacity-60 p-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eum inventore exercitationem esse quos aut assumenda porro natus maiores. Odio, velit. Minus similique temporibus iure quae repudiandae placeat impedit soluta!</p>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse justify-start">
                                <h2 className="px-4 border-t-[20px]  h-46 border-[#30122A] text-[#802e6f] font-bold text-3xl text-center uppercase"></h2>
                                <div className="bg-[#30122A] w-96 text-center rounded-es-xl rounded-ss-xl rounded-ee-xl">
                                    <p className="text-justify text-white opacity-60 p-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eum inventore exercitationem esse quos aut assumenda porro natus maiores. Odio, velit. Minus similique temporibus iure quae repudiandae placeat impedit soluta!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 border-b-4 border-[#802e6f]"></div>
                <div className="">
                    <div className="flex flex-col lg:flex-row items-center px-4 mt-20">
                        <div className='w-full md:w-1/3 p-4 rounded-lg mb-8 lg:mb-0 md:me-8'>
                            <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <img src={about} className="w-full h-full rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                        </div>
                        <div className="text-white 'w-full md:w-2/3 px-4">
                            <h1 className="text-3xl md:text-5xl uppercase tracking-wider">About Us</h1>
                            <p className="border-b-4 border-[#802e6f] w-20 pt-5"></p>
                            <p className="pt-5 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum accusamus libero deleniti voluptas error beatae consequuntur, fuga soluta debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam ratione necessitatibus sint. Beatae voluptatem maxime culpa facere, esse fuga?</p>
                            <div className="mt-8">
                                <Link to={'/about-us'} ><Button name={'Learn More'} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;