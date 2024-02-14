import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function Flyout(props) {
  const solutions = props.solutions
  const title = props.title
  return (
    <Popover className='relative'>
      <Popover.Button className='inline-flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1'>
        <span>{title}</span>
        <ChevronDownIcon className='w-5 h-5' aria-hidden='true' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-max'>
          <div className='flex-auto w-screen max-w-sm p-4 text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5'>
            {solutions.map((item) => (
              <div
                key={item.name}
                className='relative p-4 rounded-lg hover:bg-gray-50'
              >
                <Link to={item.href} className='font-semibold text-gray-900'>
                  {item.name}
                  <span className='absolute inset-0' />
                </Link>
                <p className='mt-1 text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Flyout
