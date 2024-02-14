import React from 'react'
import image from '../../img/Aiello1.jpeg'

export default function Education() {
  return (
    <div className='bg-white'>
      <main className='isolate'>
        <div className='overflow-hidden'>
          <div className='px-6 pt-16 pb-16 mx-auto max-w-7xl sm:pt-30 lg:px-8 lg:pt-16'>
            <div className='max-w-2xl mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
              <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                <h2 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                  Education
                </h2>
                <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                  <ul>
                    <li>Stony Brook University</li>
                    <li>Master's in Mental Health Nursing</li>
                    <li>2014 - 2017</li>
                  </ul>
                </p>
              </div>
              <div className='flex justify-end gap-8 mt-14 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                <div className='flex-none pt-32 ml-auto space-y-8 w-44 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                  <img src={image} alt='' className='w-full rounded-3xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
