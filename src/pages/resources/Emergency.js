import React from 'react'

const services = [
  {
    name: 'DASH Hotline',
    phone: '631-952-3333',
    href: 'https://www.fsl-li.org/dash-hotline-crisis-care-center-are-available-24-hours-a-day/',
    imageUrl: 'https://www.fsl-li.org/wp-content/uploads/2019/10/logo-desk.png',
    description: `Facing mental health or substance abuse issues can be overwhelming, especially combined with the additional stress and challenges our communities are facing due to the COVID-19 virus. FSL’s DASH Crisis Care Center is a beacon of hope for Suffolk County residents who are struggling to cope.  The Hotline 631-952-3333 is available 24-hours or visit www.fsl-li.org for additional services.`
  }
]
export default function Emergency() {
  return (
    <div>
      <div>
        <h1 className='text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl'>
          Emergency Services
        </h1>
        <p className='mt-2 text-center text-2xl leading-8 text-gray-600'>
          If you or someone you know is in crisis, please call 911
        </p>
      </div>
      <div className='text-lg pt-10'>
        <h2>
          <p>Other helful services</p>
        </h2>
      </div>
      {services.map((item) => (
        <li key={item.phone} className='flex justify-between gap-x-6 py-5'>
          <div className='flex min-w-0 gap-x-4'>
            <img
              className='h-20 rounded-full bg-gray-50'
              src={item.imageUrl}
              alt='logo'
            />

            <div className='min-w-0 flex-auto'>
              <p className='text-2xl font-semibold leading-6 text-gray-900'>
                <a href={item.href} link='logo'>
                  {item.name}
                </a>
              </p>
              <p className='mt-1 text-lg leading-5 text-gray-500'>
                {item.description}
              </p>
            </div>
          </div>
          <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
            <p className='text-2xl leading-6 text-gray-900'>{item.phone}</p>
          </div>
        </li>
      ))}
    </div>
  )
}
