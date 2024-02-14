import React, { useState, useEffect, createContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import loc from '../../img/loc.jpg'
import loc0 from '../../img/loc0.jpg'
import loc1 from '../../img/loc1.jpg'
import loc2 from '../../img/loc2.jpg'
import loc3 from '../../img/loc3.jpg'
import loc5 from '../../img/loc5.jpg'
import loc6 from '../../img/loc6.jpg'

export default function Location() {
  const INTERVAL_LENGTH = 2000
  const AUTOPLAY = true

  function cx(...args: unknown[]) {
    return args
      .flat()
      .filter((x) => typeof x === 'string')
      .join(' ')
      .trim()
  }

  const items = [
    <img className='' src={loc} alt='loc'></img>,
    <img className='' src={loc0} alt='loc0'></img>,
    <img className='' src={loc1} alt='loc1'></img>,
    <img className='' src={loc2} alt='loc2'></img>,
    <img className='' src={loc3} alt='loc3'></img>,
    <img className='' src={loc5} alt='loc5'></img>,
    <img className='' src={loc6} alt='loc6'></img>
  ]

  const [currentItem, setCurrentItem] = useState(0)

  const prev = () =>
    setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1))
  const next = () =>
    setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1))

  useEffect(
    (next) => {
      if (!AUTOPLAY) return
      const interval = setInterval(next, INTERVAL_LENGTH)
      return () => clearInterval(interval)
    },
    [AUTOPLAY]
  )

  return (
    <section className='relative h-[150px] w-full overflow-hidden text-center'>
      {items.map((item, index) => (
        <Transition
          key={index}
          show={currentItem === index}
          enter='transition-opacity duration-1000'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-1000'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='absolute w-full'>{item}</div>
        </Transition>
      ))}
      {/* Controls */}
      <div className='absolute w-full h-full items-center flex justify-between'>
        <button
          className='m-4 h-8 w-8 rounded-full bg-slate-200'
          onClick={prev}
        >
          {'<'}
        </button>
        <button
          className='m-4 h-8 w-8 rounded-full bg-slate-200'
          onClick={next}
        >
          {'>'}
        </button>
      </div>
      {/* Indicator */}
      <div className='absolute top-[125px] flex w-full justify-center gap-4'>
        {items.map((_, index) => (
          <div
            key={index}
            className={cx('h-[4px] w-1/12 duration-1000', {
              'bg-slate-300': index !== currentItem,
              'bg-slate-800': index === currentItem
            })}
          />
        ))}
      </div>
    </section>
  )
}
