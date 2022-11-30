import React, {useState} from 'react'
import AudiLogo from '../img/Audi-Logo.png'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {CiGlobe} from 'react-icons/ci'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full shadow-lg border-b-4 border-black">
            <div className="justify-start px-4 lg:max-w-7xl md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* Logo */}
                        <a href="#"><img src={AudiLogo} alt="audi-logo" className='w-24' /></a>

                       {/* Hamburger Button */}
                       <div className="md:hidden">
                            <div className="hover:cursor-pointer" onClick={() => setNavbar(!navbar)}>
                                {navbar ? (<AiOutlineClose size={30} />) : (<AiOutlineMenu size={30} />)}
                            </div>
                        </div>
                    </div>
                </div>
                
                     {/* Desktop */}
                    <div className='ml-12'>
                        <ul className='hidden md:flex md:space-x-8 font-Audi_Normal'>
                            <li className='hover:font-bold'><a href="#">Home</a></li>
                            <li className='hover:font-bold'><a href="#">Company</a></li>
                            <li className='hover:font-bold'><a href="#">Innovation</a></li>
                            <li className='hover:font-bold'><a href="#">Models</a></li>
                            <li className='hover:font-bold'><a href="#">Brand</a></li>
                            <li className='hover:font-bold'><a href="#">Careers</a></li>
                            <li className='hover:font-bold'><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Mobile */}
                    <div className={`flex justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                         <ul className='w-full space-y-4 font-Audi_Normal py-2 border-t-2 border-slate-500 md:hidden'>
                            <li className='hover:font-bold'><a href="#">Home</a></li>
                            <li className='hover:font-bold'><a href="#">Company</a></li>
                            <li className='hover:font-bold'><a href="#">Innovation</a></li>
                            <li className='hover:font-bold'><a href="#">Models</a></li>
                            <li className='hover:font-bold'><a href="#">Brand</a></li>
                            <li className='hover:font-bold'><a href="#">Careers</a></li>
                            <li className='hover:font-bold'><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
        </nav>
    );
}
export default Navbar