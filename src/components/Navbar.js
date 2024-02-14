import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import logo from '../img/miniLogo.ico'
import Flyout from './Flyout'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const about = [
    {
      name: 'About Us',
      description: 'Learn more about our practice and staff',
      href: '/aboutus'
    },
    {
      name: 'Contact Info',
      description: 'Get in touch with us and schedule an appointment',
      href: '/contactinfo'
    },
    {
      name: 'Location',
      description: 'Find our office and get directions',
      href: '/location'
    },
    {
      name: 'Insurance and Rates',
      description: 'Learn about our insurance policies and rates',
      href: '/insurance'
    }
  ]

  const philosophy = [
    {
      name: 'Our Practice Philosophy',
      description: 'Our mission and values',
      href: '/philosophy'
    },
    {
      name: 'Focus and conditions treated',
      description:
        'Learn about the conditions we treat and how we can help you',
      href: '/treatment'
    },
    {
      name: 'Future Projects',
      description:
        'Learn about our upcoming projects and how we are expanding our practice',
      href: '/future'
    }
  ]

  const resources = [
    {
      name: 'Patient Resources and Forms',
      description: 'Download patient forms and resources',
      href: '/resources'
    },
    {
      name: 'Helpful Links',
      description: 'Links to mental health resources and information',
      href: '/links'
    },
    {
      name: 'Tools',
      description: 'Guide to mental health tools and resources',
      href: '/tools'
    },
    {
      name: 'In case of Emergency',
      description: 'Links to emergency services and resources',
      href: '/emergency'
    }
  ]

  const trends = [
    {
      name: 'Latest Trends',
      description: 'Mental Health News',
      href: '/news'
    }
  ]

  const testimonials = [
    {
      name: 'Testimonials',
      description: 'Our patients share their experiences in thier own words',
      href: '/testimonials'
    },
    {
      name: 'Fun Quotes',
      description:
        'A collection of fun and inspiring quotes from our staff and patients',
      href: '/quotes'
    },
    {
      name: 'FAQ',
      description:
        'Frequently asked questions and answers about our practice and mental health in general',
      href: '/faq'
    }
  ]

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex items-center flex-shrink-0'>
                  <Link to='/'>
                    <img
                      className='w-auto h-8'
                      src={logo}
                      alt='Timothy P Aiello, PMHNP-BC'
                    />
                  </Link>
                </div>
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <NavLink
                    to='/aboutus'
                    className={({ isActive, isPending, isTransitioning }) =>
                      isActive
                        ? 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500'
                        : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                    }
                  >
                    <Flyout title='About Us' solutions={about} />
                  </NavLink>
                  <NavLink
                    to='/philosophy'
                    className={({ isActive, isPending, isTransitioning }) =>
                      isActive
                        ? 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500'
                        : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                    }
                  >
                    <Flyout title='Our Philosophy' solutions={philosophy} />
                  </NavLink>
                  <NavLink
                    to='/resources'
                    className={({ isActive, isPending, isTransitioning }) =>
                      isActive
                        ? 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500'
                        : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                    }
                  >
                    <Flyout title='Resources' solutions={resources} />
                  </NavLink>
                  <NavLink
                    to='/news'
                    className={({ isActive, isPending, isTransitioning }) =>
                      isActive
                        ? 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500'
                        : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                    }
                  >
                    <Flyout title='Trends' solutions={trends} />
                  </NavLink>
                  <NavLink
                    to='/testimonials'
                    className={({ isActive, isPending, isTransitioning }) =>
                      isActive
                        ? 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500'
                        : 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700'
                    }
                  >
                    <Flyout title='Testimonials' solutions={testimonials} />
                  </NavLink>

                  {/* -------------------------------------------------------------------------------------- */}
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                <button
                  type='button'
                  className='px-2 py-1 text-sm font-semibold text-white bg-indigo-600 rounded shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  <Link to='/login'>Login</Link>
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>Open user menu</span>
                      <UserCircleIcon className='w-6 h-6' aria-hidden='true' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pb-3 pt-2'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              <NavLink
                to='/aboutus'
                className={({ isActive, isPending, isTransitioning }) =>
                  isActive
                    ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
                    : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }
              >
                About Us
              </NavLink>

              <NavLink
                to='/philosophy'
                className={({ isActive, isPending, isTransitioning }) =>
                  isActive
                    ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
                    : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }
              >
                Our Philosophy
              </NavLink>

              <NavLink
                to='/resources'
                className={({ isActive, isPending, isTransitioning }) =>
                  isActive
                    ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
                    : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }
              >
                Resources
              </NavLink>

              <NavLink
                to='/trends'
                className={({ isActive, isPending, isTransitioning }) =>
                  isActive
                    ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
                    : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }
              >
                Trends
              </NavLink>

              <NavLink
                to='/testimonials'
                className={({ isActive, isPending, isTransitioning }) =>
                  isActive
                    ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
                    : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                }
              >
                Testimonials
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
