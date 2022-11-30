import React from 'react'
import AudiCover from '../img/hero.jpg'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='w-full'>
        {/* Image Hero */}
        <div className='relative hover:brightness-75 duration-500'>
            <img className='w-full object-cover md:object-cover md:object-bottom md:h-[500px]' src={AudiCover} alt="hero-cover" />
                <div className='absolute top-0 w-full h-full text-center py-10 md:py-60 text'>
                    <h1 className='text-3xl md:text-7xl text-white font-Audi_Bold'> <span><Typed strings={['E-Tron', 'Quattro', 'Audi']} typeSpeed={150} backSpeed={80} loop /></span> is the Future</h1>
                    <p className='text-lg md:text-xl text-white font-Audi_Normal pt-2 px-2'>The self-sufficient charging infrastructure is being set up at further locations</p>
                    <button className='hidden xl:flex mx-auto md:mt-14 py-4 px-20 border text-white font-semibold rounded-sm hover:bg-white hover:text-black'>Read More</button>
                </div>
        </div>
    </div>
  )
}

export default Hero