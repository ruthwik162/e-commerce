import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {


    return (
        <div className='relative mt-24'>
            <img src={assets.bottom_banner_image} className='w-full md:block hidden' alt="bottom_banner" />
            <img src={assets.bottom_banner_image_sm} className='w-full md:hidden block' alt="" />

            <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
                <div>
                    <h1 className='text-2xl md:text-4xl font-semibold text-primary'>Why We are Best?</h1>
                    {features.map((feature, index) => (
                        <div key={index} className='flex  items-center gap-4 mt-2'>
                            <img src={feature.icon} alt="" className='md:w-11 w-9' />
                            <div className='flex flex-col'>
                                <h3 className='text-lg md:text-xl font-semibold'>{feature.title}</h3>
                                <p className='text-gray-500/70 text-sm md:text-sm'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BottomBanner
