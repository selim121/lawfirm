import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';
import './ContactUs.css';
import Button from '../Button/Button';

const ContactUs = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <div className='bg-[#161D27] pt-12 pb-6'>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Need attorney</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Contact Us</h1>
                    <p className="border-b-4 border-[#D1B06B] w-20 pt-2"></p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-12">
                    <div className="text-[#D7D7D7] card-bg bg-[#1F2732] p-4 space-y-3">
                        <h1 className="text-3xl">Law Firm Logo</h1>
                        <p>Minneapolis, Minnesota, USA</p>
                        <p>Phone: 456 789 2345</p>
                        <p>E-mail: contact@example.com</p>
                        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit minus quaerat commodi neque, natus provident esse ea, veritatis accusamus ullam consequatur corrupti necessitatibus quo.</p>
                        <div className="flex flex-col space-y-3">
                            <h5 className="text-[#D7D7D7]">Connect us with Social:</h5>
                            <div className="flex flex-wrap gap-4 items-center justify-start">
                                <FaFacebookF color='#D1B06B' size={'30px'} />
                                <FaInstagram color='#D1B06B' size={'30px'} />
                                <FaTiktok color='#D1B06B' size={'30px'} />
                                <FaTwitter color='#D1B06B' size={'30px'} />
                                <FaLinkedin color='#D1B06B' size={'30px'} />
                            </div>
                        </div>
                    </div>
                    <div className="responsive-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="contact-bg bg-fixed">
                    <div className="w-full md:w-3/4 h-screen flex flex-col justify-center mx-auto">
                        <form className="bg-[#1F2732] grid grid-cols-1 items-center justify-center gap-4 px-4 py-20 text-center">
                            <div>
                                <input className="w-full md:w-3/4 px-4 py-3 bg-[#1F2732] border-b border-[#3A4553] dark:text-white" type="text" placeholder="Enter Your Name" name="name" required />
                            </div>
                            <div className='my-6'>
                                <input className="w-full md:w-3/4 px-4 py-3 bg-[#1F2732] border-b border-[#3A4553] dark:text-white" type="email" placeholder="Enter Your Email" name="email" required />
                            </div>
                            <div>
                                <textarea className="w-full md:w-3/4 px-4 py-3 bg-[#1F2732] border-b border-[#3A4553] dark:text-white" placeholder="Enter Your Message" name="message" cols="30" rows="6" required></textarea>
                            </div>

                            <div className="pt-5">
                                <Button name={'Get An Appointment'} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-12 mb-6 border-b-4 border-[#D1B06B]"></div>
                <div className="text-center">
                    <p className="text-[#D7D7D7]">Copyright <span>&copy; {currentYear} risGen Solution Ltd.</span></p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;