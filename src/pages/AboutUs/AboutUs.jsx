import React from 'react';
import team from '../../assets/others/team.png';
import './AboutUs.css';
import Attorney from '../Home/Attorney/Attorney';

const AboutUs = () => {
    return (
        <div className='bg-[#1F2732]'>
            <div className="max-w-screen-xl mx-auto py-12 px-4">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Know about</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Our Firm Family</h1>
                    <p className="border-b-4 border-[#D1B06B] w-20 pt-2"></p>
                </div>
                <p className="text-[#D7D7D7] tracking-wider text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam earum numquam quas hic voluptate praesentium quis. Non quis blanditiis recusandae sint minus animi dolorum commodi officia odit distinctio doloribus repellat magni beatae obcaecati, alias dignissimos quidem iure molestiae omnis adipisci? Qui accusantium, totam quis numquam deserunt aliquam dolorem consequuntur ipsa ab iste molestias atque quibusdam odio laboriosam eligendi dolorum cumque hic architecto quod velit omnis praesentium nesciunt et! Nulla quis eaque velit. Veritatis eos repellendus eaque ad voluptate maiores corrupti quod rem. Odit nesciunt nobis delectus vero possimus laboriosam libero architecto! Perspiciatis amet quod commodi ducimus, accusantium qui fuga officiis molestiae voluptas quidem ipsum. At, illum! Quaerat, esse minima. Libero assumenda repellendus eos sit suscipit, magnam illo? Ex, earum at. Corrupti ab, magnam eligendi sit voluptate ullam soluta architecto alias iure? Voluptates delectus consequuntur veritatis ratione sapiente, modi maiores dignissimos fuga reprehenderit tempore distinctio necessitatibus earum similique mollitia nostrum voluptatibus.
                </p>
                <div className="my-12">
                    <img className='h-full w-full' src={team} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 lg:gap-20 pt-12">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Why Client Like Us</h1>
                        <p className="border-b-4 border-[#D1B06B] w-28 pt-4"></p>
                    </div>

                    <div className="timeline-main">
                        <div className="timeline-wrap">
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">Experience</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">Location</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">Flexibility</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">People</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">Size</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">Speed</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">Budgets</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-card">
                                <div className="timeline-card-wrap">
                                    <h3 className="text-white uppercase tracking-widest text-2xl mb-4">Approach</h3>
                                    <p className="text-[#D7D7D7] tracking-wider text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa amet autem perferendis ad beatae, maiores voluptatibus, explicabo quam optio deserunt? Molestias assumenda sint amet, error, autem obcaecati possimus eos saepe et reiciendis accusantium repellendus nesciunt repudiandae consectetur commodi voluptate!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-12 mb-6 border-b-4 border-[#D1B06B]"></div>
                <Attorney />
            </div>
        </div>
    );
};

export default AboutUs;