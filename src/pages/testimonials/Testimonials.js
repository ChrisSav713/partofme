import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander'
    }
  },
  {
    body: 'Excepteur consectetur deserunt id incididunt veniam mollit officia sint qui aute duis sit cillum. Reprehenderit fugiat amet aliqua in commodo minim sunt laborum.',
    author: {
      name: 'Lindsay Walton',
      handle: 'lindsaywalton'
    }
  },
  {
    body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis.',
    author: {
      name: 'Whitney Francis',
      handle: 'whitneyfrancis'
    }
  },
  {
    body: 'Anim sit consequat culpa commodo eu do nisi commodo ut aute aliqua. Laborum esse duis tempor consectetur officia mollit fugiat. Exercitation qui elit minim minim quis fugiat ex.',
    author: {
      name: 'Michael Foster',
      handle: 'michaelfoster'
    }
  },
  {
    body: 'Distinctio facere aliquam est qui atque sint molestias ad. Fuga consequuntur asperiores voluptatum ipsum.',
    author: {
      name: 'Courtney Henry',
      handle: 'courtneyhenry'
    }
  },
  {
    body: 'Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.',
    author: {
      name: 'Leonard Krasner',
      handle: 'leonardkrasner'
    }
  },
  {
    body: 'Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque.',
    author: {
      name: 'Dries Vincent',
      handle: 'driesvincent'
    }
  },
  {
    body: 'Nam nesciunt dolorem dolor asperiores sint. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.',
    author: {
      name: 'Leslie Tom Cook',
      handle: 'tomcook'
    }
  },
  {
    body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
    author: {
      name: 'Floyd Miles',
      handle: 'floydmiles'
    }
  }
]
export default function Testimonials() {
  return (
    <div className='py-24 bg-white sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-xl mx-auto text-center'>
          <h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
            Testimonials
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our patient's experience in thier own words
          </p>
        </div>
        <div className='flow-root max-w-2xl mx-auto mt-16 sm:mt-20 lg:mx-0 lg:max-w-none'>
          <div className='-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className='pt-8 sm:inline-block sm:w-full sm:px-4'
              >
                <figure className='p-8 text-sm leading-6 rounded-2xl bg-gray-50'>
                  <blockquote className='text-gray-900'>
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className='flex items-center mt-6 gap-x-4'>
                    <UserCircleIcon className='w-6 h-6' aria-hidden='true' />
                    <div>
                      <div className='font-semibold text-gray-900'>
                        {testimonial.author.name}
                      </div>
                      <div className='text-gray-600'>{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
