import React from 'react'
import bigscal from '../assets/ssasit-logo.png'

const Experience = () => {
    return (
        <div className='w-full h-full p-4'>
            <div className='flex items-center justify-start'>
                <img
                    src={bigscal}
                    alt="Profile Header"
                    className="size-12 object-scale-down rounded-full"
                />
                <div className='text-lg md:text-2xl font-medium pl-4'>Bigscal Technologies Pvt Ltd</div>
            </div>

        </div>
    )
}

export default Experience