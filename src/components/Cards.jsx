import React from 'react'
import Card_1 from '../img/card1.webp'
import Card_2 from '../img/card2.webp'
import Card_3 from '../img/card3.webp'

const PageContent = () => {
  return (
    <div className='mt-10'>
        {/* Page Content */}
        <div className=''>
            <h1 className='text-center text-3xl md:text-5xl font-Audi_Bold py-10'>From the world of Audi</h1>
            {/* Cards */}
            {/* <div className='flex flex-col md:flex-row justify-center items-center gap-8 px-2'> */}
            <div className='grid md:grid-cols-3 gap-4 px-2 md:px-20 mb-10'>
                {/* Card 1 */}
                <a className='' href="#">
                    <img className='w-full' src={Card_1} alt="card-1" />
                    <h2 className='text-center text-2xl md:text-3xl font-Audi_Normal py-4'>Future of Audi</h2>
                        <p className='font-Montserrat text-center leading-7'>
                            The Audi Group continues to be successful in a challenging market environment. During the first three quarters of 2022, the Premium brand group increased its revenue, operating profit and operating return on sales. 
                        </p>
                </a>
                {/* Card 2 */}
                <a className='' href="#">
                    <img className='w-full' src={Card_2} alt="card-2" />
                    <h2 className='text-center text-2xl md:text-3xl font-Audi_Normal py-4'>The art of Progress</h2>
                    <p className='font-Montserrat text-center leading-7'>
                        Further training is crucial for Audi’s transformation, such as imparting expertise in and key competencies for high-voltage storage systems.
                        Audi recently underpinned its clear course toward electromobility with strong figures and important milestones. How the Four Rings are progressing on their path to successful electrification.
                    </p>
                </a>
                {/* Card 3 */}
                <a className='' href="#">
                    <img className='w-full' src={Card_3} alt="card-3" />
                    <h2 className='text-center text-2xl md:text-3xl font-Audi_Normal py-4'>A concept for greater Communication</h2>
                    <p className='font-Montserrat text-center leading-7'>
                        Audi sees a diverse supply chain as an opportunity to effect positive transformation in society and long-term success.
                        Audi recently underpinned its clear course toward electromobility with strong figures and important milestones. How the Four Rings are progressing on their path to successful electrification.
                    </p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default PageContent