import React, { useEffect } from 'react';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';

const Navbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            document.querySelector('nav').classList.add('bg-[#1F2732]', 'fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'fadeInUp');
            document.querySelector('nav').classList.remove('relative', 'z-40');
        } else {
            document.querySelector('nav').classList.add('bg-[#1F2732]', 'relative', 'z-40');
            document.querySelector('nav').classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'fadeInUp');
        }
    };

    return (
        <>
            <nav className='bg-[#1F2732] relative z-40 border-b-2 border-[#161D27]'>
                <div className="xl:mx-20 px-4">
                    <div className='flex flex-row py-2 items-center justify-between gap-3 md:gap-0'>
                        <Link to={'/'} ><h1 className='text-white uppercase text-xl'>Law Firm</h1></Link>
                        <NavItems />
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-[#1F2732] rounded-lg w-36 space-y-2">
                                <li>
                                    <Link to="/" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[3px] text-[#FFFFFF] hover:text-[#FFFFFF]">
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[3px] text-[#FFFFFF] hover:text-[#FFFFFF]">
                                        Setting
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#FFFFFF] hover:text-[#FFFFFF]">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;