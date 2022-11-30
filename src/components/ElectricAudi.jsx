import React from 'react'
import Etron from '../img/e-tron.webp'
import GirlPic from '../img/girl.webp'

const ElectricAudi = () => {
  return (
    <div className='w-full mt-32'>
        {/* Electric Section */}
        {/* E-Tron Section */}
       <div className='flex flex-col md:flex-row justify-center md:gap-20 px-2'>
            <div className='w-full md:w-1/3'>
                {/* Mobile Image Show */}
                <img className='md:hidden w-full' src={Etron} alt="e-tron" />
                <h3 className='font-Audi_Normal text-xl py-5'>Full electric speed ahead</h3>
                <p className='leading-7'>
                Audi recently underpinned its clear course toward electromobility with strong figures and important milestones. How the Four Rings are progressing on their path to successful electrification.
                </p>
                <button className='hidden md:flex md:mt-14 py-4 px-20 font-semibold rounded-sm border border-black hover:text-gray-600'>Read More</button>
            </div>
        

            {/* Image */}
            <div>
                {/* Mobile Image Hidden */}
                <img className='hidden md:flex' src={Etron} alt="e-tron" />
            </div>
                {/* Mobile Button */}
                <button className='flex justify-center items-center md:hidden w-full my-5 md:mt-14 py-4 px-20 font-semibold rounded-sm border border-black hover:text-gray-600'>Read More</button>
       </div>

        {/* Girl Section */}
        <div className='flex flex-col md:flex-row justify-center md:gap-20 px-2 my-24'>
            <div className='w-full md:w-1/3'>
                {/* Mobile Image Show */}
                <img className='md:hidden w-full' src={GirlPic} alt="e-girl" />
                <h3 className='font-Audi_Normal text-xl py-5'>Full electric speed ahead</h3>
                <p className='leading-7'>
                Audi recently underpinned its clear course toward electromobility with strong figures and important milestones. How the Four Rings are progressing on their path to successful electrification.
                </p>
                <button className='hidden md:flex md:mt-14 py-4 px-20 font-semibold rounded-sm border border-black hover:text-gray-600'>Read More</button>
            </div>

            {/* Image */}
            <div>
                {/* Mobile Image Hidden */}
                <img className='hidden md:flex' src={GirlPic} alt="e-girl" />
            </div>
                {/* Mobile Button */}
                <button className='flex justify-center items-center md:hidden w-full my-5 md:mt-14 py-4 px-20 font-semibold rounded-sm border border-black hover:text-gray-600'>Read More</button>
        </div>
    </div>
  )
}

export default ElectricAudi