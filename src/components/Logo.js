import React, { useEffect } from 'react'
import logoImage from '../img/the part of me all caps trans.png'

export default function Logo() {
  // useEffect(() => {
  //   const myInterval = setInterval(activate, 10)
  //   return () => clearInterval(myInterval)
  // }, [])

  // const activate = () => {
  //   const child = document.getElementsByClassName('child')[0]
  //   child.classList.add('active')
  // }

  return (
    <div className='grid grid-rows-2 '>
      <div className='grid grid-cols-2 bg-gradient-to-t from-[#ffcac9] to-[#737dfe]'>
        <div></div>

        <div className=''>
          <img className='' src={logoImage} alt='logo' />
        </div>
      </div>
      <div className='flex items-start justify-center p-5 h-auto rounded h-28'>
        <div className='pl-5 text-2xl tracking-tight text-gray-900 sm:text-4xl'>
          <p className='text-black'>
            A Different Brain Requires A Different Approach
          </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}
