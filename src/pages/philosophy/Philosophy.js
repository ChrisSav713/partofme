import React from 'react'

export default function Philosophy() {
  const values = [
    {
      name: 'Be Awesome',
      description:
        'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.'
    },
    {
      name: 'Always learning',
      description:
        'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.'
    },
    {
      name: 'Be supportive',
      description:
        'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.'
    }
  ]

  return (
    <>
      <div className='px-6 mx-auto -mt-12 max-w-7xl sm:mt-0 lg:px-8 xl:-mt-8'>
        <div className='max-w-2xl mx-auto lg:mx-0 lg:max-w-none'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our mission
          </h2>
          <div className='flex flex-col mt-6 gap-x-8 gap-y-20 lg:flex-row'>
            <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
              <p className='text-xl leading-8 text-gray-600'>
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <div className='max-w-xl mt-10 text-base leading-7 text-gray-700'>
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p className='mt-10'>
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div className='lg:flex lg:flex-auto lg:justify-center'>
              <dl className='w-64 space-y-8 xl:w-80'></dl>
            </div>
          </div>
        </div>
      </div>
      {/* Image section */}
      <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
        <img
          src='https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          alt=''
          className='aspect-[5/2] w-full object-cover xl:rounded-3xl'
        />
      </div>

      {/* Values section */}
      <div className='px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Our values
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className='grid max-w-2xl grid-cols-1 mx-auto mt-16 text-base leading-7 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {values.map((value) => (
            <div key={value.name}>
              <dt className='font-semibold text-gray-900'>{value.name}</dt>
              <dd className='mt-1 text-gray-600'>{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
}
