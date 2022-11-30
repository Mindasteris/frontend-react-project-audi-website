import React from 'react'
import newsAudi1 from '../img/news-audi1.webp'
import newsAudi2 from '../img/news-audi2.webp'
import newsAudi3 from '../img/news-audi3.webp'

const News = () => {
  return (
    <div className='mb-10'>
        {/* News Section */}
        <div>
            <h1 className='text-center text-3xl md:text-5xl font-Audi_Bold py-10'>Audi News</h1>

            {/* Cards News */}
            <div className='grid md:grid-cols-3 gap-4 px-2 md:px-20 mb-10'>
                {/* Card 1 */}
                <a className='' href="#">
                    <img className='w-full' src={newsAudi1} alt="card-1" />
                    <h2 className='text-center text-xl md:text-2xl font-Audi_Normal py-4'>Dynamic power meets expressive design: The Audi RS 6 Avant performance and RS 7 Sportback performance</h2>
                </a>
                {/* Card 2 */}
                <a className='' href="#">
                    <img className='w-full' src={newsAudi2} alt="card-2" />
                    <h2 className='text-center text-xl md:text-2xl font-Audi_Normal py-4'>New Audi charging service: unrestricted mobility in 27 European countries</h2>
                </a>
                {/* Card 3 */}
                <a className='' href="#">
                    <img className='w-full' src={newsAudi3} alt="card-3" />
                    <h2 className='text-center text-xl md:text-2xl font-Audi_Normal py-4'>More purity, more reduction, more consistency: The new rings from Audi</h2>
                </a>
            </div>

            {/* Button */}
            <div>
                <button className='flex justify-center mx-auto md:mt-14 py-4 px-20 bg-black text-white font-semibold hover:opacity-80 duration-500 hover:scale-105'>Audi Media Center</button>
            </div>
        </div>
    </div>
  )
}

export default News