import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const NavItems = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value);
    }, [])

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.navbar') && !event.target.closest('.toggle-element')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className='relative '>
            <div className='flex flex-row items-center gap-6'>
                <NavLink to="/" className="hidden md:block active-link hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#FFFFFF]" onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>
                <NavLink to="/team-members" className="hidden md:block active-link hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#FFFFFF]" onClick={() => setIsOpen(false)}>
                    Our Teams
                </NavLink>
                <NavLink to="/practice-areas" className="hidden md:block active-link hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#FFFFFF]" onClick={() => setIsOpen(false)}>
                    Practice Areas
                </NavLink>
                <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                    <label tabIndex={0} className="hidden md:block hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] cursor-pointer text-[#FFFFFF] "><span className='flex flex-row items-center'>Expertise <IoMdArrowDropdown /></span> </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-lg w-36 space-y-2">
                        <li>
                            <Link to="/practice-areas/parenting" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[3px] text-[#161D27]">
                                Parenting
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/arbitration" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Arbitration
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/collaborative" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Collaborative
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/litigation" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Litigation
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/tax" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Tax
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/bankruptcy" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[3px] text-[#161D27]">
                                Bankruptcy
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/corporate" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[3px] text-[#161D27]">
                                Corporate
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/estate" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[3px] text-[#161D27]">
                                Estate Planning
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/mediation" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Mediation
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/tort" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Tort
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/company" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Company
                            </Link>
                        </li>
                        <li>
                            <Link to="/practice-areas/labour" className="hover:border-b-4 hover:border-[#D1B06B] px-[8px] py-[1px] text-[#161D27]">
                                Labour
                            </Link>
                        </li>
                    </ul>
                </div>
                <div onClick={toggleOpen} className='flex flex-row items-center gap-3 cursor-pointer hover:shadow-md transition toggle-element rounded-full p-4 py-1 px-2 border-[1px] border-[#D1B06B] md:hidden'>
                    <AiOutlineMenu color='#FFFFFF' size={'30px'} />
                </div>
            </div>
            {
                isOpen && (
                    <div className='absolute z-20 rounded-xl shadow-md w-[40vw] md:w-3/4 bg-[#1F2732] overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>

                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/'
                                className='block md:hidden px-4 py-3 hover:border-b-4 hover:border-[#D1B06B] transition font-semibold text-[#FFFFFF]'
                            >
                                Home
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/'
                                className='block md:hidden px-4 py-3 hover:border-b-4 hover:border-[#D1B06B] transition font-semibold text-[#FFFFFF]'
                            >
                                Services
                            </Link>
                            <Link
                                onClick={() => setIsOpen(false)}
                                to='/-work'
                                className='block md:hidden px-4 py-3 hover:border-b-4 hover:border-[#D1B06B] transition font-semibold text-[#FFFFFF]'
                            >
                                Previous Work
                            </Link>
                            <Link to="/practice-areas/" className="block md:hidden px-4 py-3 hover:border-b-4 hover:border-[#D1B06B] transition font-semibold text-[#FFFFFF]">
                                Our Team
                            </Link>
                            <Link onClick={() => setIsOpen(false)} to="/practice-areas/" className="block md:hidden px-4 py-3 hover:border-b-4 hover:border-[#D1B06B] transition font-semibold text-[#FFFFFF]">
                                Contact Us
                            </Link>
                            <Link onClick={() => setIsOpen(false)} to="/practice-areas/" className="block md:hidden px-4 py-3 hover:border-b-4 hover:border-[#D1B06B] transition font-semibold text-[#FFFFFF]">
                                About risGen
                            </Link>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default NavItems;