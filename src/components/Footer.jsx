import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='text-white bg-black h-full'>
        {/* Footer */}
        <div className='flex justify-end gap-8 text-3xl p-4 pr-10 md:pr-60'>
            {/* Social Icons */}
            <FaFacebookF className='hover:text-slate-400 duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-slate-400 duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-slate-400 duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-slate-400 duration-300 cursor-pointer' />
            <FaLinkedin className='hover:text-slate-400 duration-300 cursor-pointer' />
        </div>

        {/* List of Text */}
        <div className='flex flex-col w-full md:flex-row my-10 justify-around'>
            {/* List 1 */}
            <div className='py-5 text-center'>
                <h3 className='text-2xl font-Audi_Normal pb-5'>Topics</h3>
                <ul className='leading-8'>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Innovation</a></li>
                    <li><a href="#">Models</a></li>
                    <li><a href="#">Brand</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>

            {/* List 2 */}
            <div className='py-5 text-center'>
                <h3 className='text-2xl font-Audi_Normal pb-5'>AUDI AG</h3>
                <ul className='leading-8'>
                    <li><a href="#">Audi Report 2022</a></li>
                    <li><a href="#">Documents & Policies</a></li>
                    <li><a href="#">Financial Calender</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>

            {/* List 3 */}
            <div className='py-5 text-center'>
                <h3 className='text-2xl font-Audi_Normal pb-5'>Services</h3>
                <ul className='leading-8'>
                    <li><a href="#">myAudi</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Job portal</a></li>
                </ul>
            </div>
        </div>

        {/* All Rights Reserved */}
        <div className='border-t border-gray-500 md:w-[75%] mx-auto'>
            <p className='px-5 py-5'>&copy; AUDI AG. All rights reserved</p>
        </div>

        {/* Last Paragpraphs */}
        <div className='p-2 text-center md:w-[75%] mx-auto'>
            <p className='py-5'>
            The stated consumption and emissions values were determined in accordance with the legally stipulated measurement procedure. The WLTP test cycle completely replaced the NEDC test cycle with effect from 1 January 2022. As a result, no NEDC values are available for vehicles with a type approval issued after this date.
            </p>

            <p className='py-5'>
            The values do not refer to an individual vehicle and are not part of the offer; instead, they are solely for the purpose of comparing between different types of vehicles. Optional equipment and accessories (attachments, tyre formats etc.) may alter relevant vehicle parameters such as the weight, rolling resistance and aerodynamics and, alongside weather and traffic conditions and individual driving behaviour, may influence the fuel consumption, electricity consumption, CO2 emissions and performance values of a vehicle.
            </p>

            <p>
            Due to the more realistic test conditions, fuel consumption and CO2 emissions values will in many cases be higher in accordance with the WLTP than in accordance with the NEDC. There may have been corresponding changes to vehicle taxation since 1 September 2018 as a result of this. You can find further information on the differences between the WLTP and the NEDC at http://www.audi.co.uk/wltp.
            </p>

            <p className='py-5 pb-20'>
            Further information on the official fuel consumption and the official, specific CO2 emissions of new passenger car models can be found in the “Guide on the fuel economy, CO2 emissions and power consumption of all new passenger car models”, available free of charge from all sales outlets and from DAT Deutsche Automobil Treuhand GmbH, Hellmuth-Hirth-Str. 1, 73760 Ostfildern, Germany or at www.dat.de.
            </p>
        </div>
    </div>
  )
}

export default Footer