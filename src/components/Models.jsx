import React from 'react'
import audiModelsPic from '../img/audi-models-pic.webp'

const Models = () => {
  return (
    <div className='my-32 px-2'>
        {/* Models Section */}
        <div className=''>
            <div className='flex flex-col md:flex-row justify-center'>
                {/* Image */}
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <img className='h-full' src={audiModelsPic} alt="audi-two" />
                </div>

                {/* Text */}
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <h3 className='font-Audi_Normal text-xl text-center py-5'>At Audi you’ll find the right vehicle for every requirement</h3>
                    <p className='text-center leading-7'>
                    Sporty, luxurious, or compact – at Audi you will find the right vehicle for every requirement. Discover and configure our series models now.
                    </p>
                    <button className='w-full md:w-1/2 md:ml-16 mt-5 py-4 font-semibold rounded-sm border border-black hover:text-gray-600'>Discover All Models</button>
                    
                    {/* Hints */}
                    <p className='text-[10px] leading-7 mx-auto mt-5 max-w-[500px]'>
                    Audi Q4 Sportback e-tron:Power consumption (combined*) in kWh/100 km: 19.7–16.1CO₂ emissions (combined*) in g/km: 0
                    Information on fuel/power consumption and CO₂ emissions with ranges depending on the selected equipment of the vehicle.
                    Only consumption and emission values according to WLTP and not according to NEDC are available for the vehicle.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Models