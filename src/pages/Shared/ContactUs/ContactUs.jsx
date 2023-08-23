import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <div className='bg-[#30122A] py-12'>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-2 py-12">
                    <p className="text-white tracking-widest font-light">Need attorney</p>
                    <h1 className="text-3xl md:text-6xl text-white uppercase tracking-widest font-semibold text-center">Contact Us</h1>
                    <p className="border-b-4 border-[#802e6f] w-20 pt-2"></p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="text-white bg-shadow p-4 space-y-3">
                        <h1 className="text-3xl">Law Firm Logo</h1>
                        <p className="opacity-70">Minneapolis, Minnesota, USA</p>
                        <p className="opacity-90">Phone: 456 789 2345</p>
                        <p className="opacity-90">E-mail: contact@example.com</p>
                        <p className="text-justify opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reprehenderit minus quaerat commodi neque, natus provident esse ea, veritatis accusamus ullam consequatur corrupti necessitatibus quo.</p>
                        <div className="flex flex-col space-y-3">
                            <h5 className="text-white opacity-80">Connect us with Social:</h5>
                            <div className="flex flex-wrap gap-4 items-center justify-start">
                                <FaFacebookF color='#802e6f' size={'30px'} />
                                <FaInstagram color='#802e6f' size={'30px'} />
                                <FaTiktok color='#802e6f' size={'30px'} />
                                <FaTwitter color='#802e6f' size={'30px'} />
                                <FaLinkedin color='#802e6f' size={'30px'} />
                            </div>
                        </div>
                    </div>
                    <div className="responsive-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="my-12 border-b-4 border-[#802e6f]"></div>
                <div className="text-center">
                    <p className="text-white opacity-70">Copyright <span>&copy; {currentYear} risGen Solution Ltd.</span></p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;