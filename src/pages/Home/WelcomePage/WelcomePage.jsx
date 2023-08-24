import React from 'react';
import './WelcomePage.css';
import img1 from '../../../assets/home/1.jpeg';
import amit from '../../../assets/home/amit.jpeg';
import about from '../../../assets/others/about-me.png';
import result from '../../../assets/others/result.png';
import {VscLaw} from 'react-icons/vsc';
import Button from '../../Shared/Button/Button';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div id='welcome' className='bg-[#1F2732]'>
            <div className="max-w-screen-xl mx-auto py-12 px-4">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Welcome to</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Law Firm Family</h1>
                    <p className="border-b-4 border-[#D1B06B] w-20 pt-2"></p>
                </div>
                <div className="flex flex-col lg:flex-row items-center px-4 mt-20">
                    <div className='card-bg bg-[#161D27] w-full md:w-1/3 p-4 rounded-lg mb-8 lg:mb-0 md:me-8'>
                        <div className="relative w-full h-full overflow-hidden rounded-lg">
                            <img src={img1} className="w-full h-full rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                        </div>
                    </div>
                    <div className="text-white 'w-full md:w-2/3 px-4">
                        <h1 className="text-3xl md:text-5xl uppercase tracking-wider">Your Trusted Path Finder</h1>
                        <p className="border-b-4 border-[#D1B06B] w-20 pt-5"></p>
                        <p className="pt-5 font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum accusamus libero deleniti voluptas error beatae consequuntur, fuga soluta debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam ratione necessitatibus sint. Beatae voluptatem maxime culpa facere, esse fuga?</p>
                        <div className="mt-8">
                            <Link to={'/team-members'} ><Button name={'Learn More'} /></Link>
                        </div>
                    </div>
                </div>
                <div className="card-bg p-4 bg-[#161D27] my-36 relative ">
                    <h3 className="text-sm md:text-2xl text-white uppercase tracking-wider absolute left-10 lg:left-1/2 -top-4 bg-[#D1B06B] p-4 card-bg">Embracing Change Together</h3>
                    <div className="flex flex-col lg:flex-row items-center p-4 bg-[#1F2732]">
                        <div className='card-bg bg-[#161D27] p-4 rounded-full my-8 lg:my-0 lg:me-8'>
                            <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full">
                                <img src={amit} className="w-full h-full rounded-full object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-white opacity-80 text-justify">
                                <span className="text-[#D1B06B] font-bold">&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam inventore, iste non sunt quasi tempore quia enim vel ratione distinctio porro eaque hic id impedit magni omnis reiciendis incidunt eveniet? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi officiis impedit fuga deleniti consequuntur dolorum reprehenderit at tenetur culpa nisi, cupiditate possimus excepturi reiciendis quaerat architecto unde ullam tempora aperiam ab explicabo aliquid corrupti iusto aut totam. Ipsam, fuga deleniti.<span className="text-[#D1B06B] font-bold">&quot;</span>
                            </p>
                            <div className="mt-4">
                                <h3 className="text-3xl text-white">Andrew Vankoughnett</h3>
                                <p className="text-white opacity-70 text-sm">Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-img bg-fixed">
                    <div className="flex flex-col h-screen items-center justify-center px-4">
                        <div className="bg-[#1F2732] w-full md:w-[500px] lg:w-[800px] p-8 md:p-12 lg:p-16">
                            <h1 className="text-white text-2xl md:text-3xl">The Simple Choice for Complex Litigation</h1>
                            <p className="border-b-4 border-[#D1B06B] w-20 pt-5"></p>
                            <p className="text-justify text-[#D7D7D7] pt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eum inventore exercitationem esse quos aut assumenda porro natus maiores. Odio, velit. Minus similique temporibus iure quae repudiandae placeat impedit soluta!</p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-5">
                                <div className="flex items-center justify-center gap-2 bg-[#3B434E] p-3">
                                    <VscLaw color='#D1B06B' size={'35px'} />
                                    <p className="text-white">
                                        95% <br />
                                        Case Success
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-2 bg-[#D1B06B] p-3">
                                    <p className="text-white bg-[#1F2732] p-1 rounded-md">15+</p>
                                    <p className="">Years <br />Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 border-b-4 border-[#D1B06B]"></div>
                <div className="">
                    <div className="flex flex-col lg:flex-row items-center mt-20">
                        <div className='card-bg bg-[#161D27] w-full md:w-1/3 p-4 rounded-lg mb-8 lg:mb-0 md:me-8'>
                            <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <img src={about} className="w-full h-full bg-[#000000] rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                        </div>
                        <div className="text-white 'w-full md:w-2/3">
                            <h1 className="text-3xl md:text-5xl uppercase tracking-wider">About Us</h1>
                            <p className="border-b-4 border-[#D1B06B] w-20 pt-5"></p>
                            <p className="pt-5 opacity-70 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum accusamus libero deleniti voluptas error beatae consequuntur, fuga soluta debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam ratione necessitatibus sint. Beatae voluptatem maxime culpa facere, esse fuga?</p>
                            <div className="mt-8">
                                <Link to={'/about-us'} ><Button name={'Learn More'} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-12 border-b-4 border-[#D1B06B]"></div>
                <div className="">
                    <div className="flex flex-col-reverse lg:flex-row items-center mt-20">
                        <div className="text-white 'w-full md:w-2/3 px-4">
                            <h1 className="text-3xl md:text-5xl uppercase tracking-wider">Great Result</h1>
                            <p className="border-b-4 border-[#D1B06B] w-20 pt-5"></p>
                            <p className="pt-5 opacity-70 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum accusamus libero deleniti voluptas error beatae consequuntur, fuga soluta debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam ratione necessitatibus sint. Beatae voluptatem maxime culpa facere, esse fuga?</p>
                            <div className="mt-8">
                                <Link to={'/great-result'} ><Button name={'Learn More'} /></Link>
                            </div>
                        </div>
                        <div className='card-bg bg-[#161D27] w-full md:w-1/3 p-4 rounded-lg mb-8 lg:mb-0 md:ms-8'>
                            <div className="relative w-full h-full overflow-hidden rounded-lg">
                                <img src={result} className="w-full h-full bg-[#000000] rounded-lg object-cover transition-transform hover:scale-110 transition-duration-300 transition-timing-function-ease-in" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;