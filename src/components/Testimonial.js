import React from 'react'

export default function Testimonial() {
  return (
    <div className='bg-gradient-to-t from-[#ffcac9] to-[#737dfe] p-20 shadow-xl rounded-3xl'>
      <div className=''>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            What Our Patients Say
          </h2>
        </div>
        <figure>
          <blockquote className='mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8'>
            <p>
              “Amet amet eget scelerisque tellus sit neque faucibus non
              eleifend. Integer eu praesent at a. Ornare arcu gravida natoque
              erat et cursus tortor consequat at. Vulputate gravida sociis enim
              nullam ultricies habitant malesuada lorem ac.”
            </p>
          </blockquote>
          <figcaption className='mt-6 text-base text-white'>
            <div className='font-semibold'>Judith Black</div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
