import React from 'react'
const posts = [
  {
    id: 1,
    title:
      '‘A horrible, perfect storm’: Frustrations rise as shortage of Adderall, other ADHD medication continues',
    href: 'https://www.msn.com/en-us/health/other/a-horrible-perfect-storm-frustrations-rise-as-shortage-of-adderall-other-adhd-medication-continues/ar-BB1iawo4',
    description:
      'All Jennifer Howell wanted was to find medication for her son. Instead, she was caught in a maze of desperate phone calls to pharmacies and physicians.',
    imageUrl:
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1iarWE.img?w=768&h=521&m=6&x=895&y=334&s=141&d=141',
    date: 'Feb 13, 2024',
    datetime: '2024-02-13',
    category: {
      title: 'Chicago Trbune',
      href: 'http://www.chicagotribune.com/'
    },
    author: {
      name: 'Kate Armanini',
      role: '',
      href: '#',
      imageUrl: ''
    }
  },
  {
    id: 2,
    title: `I've Never Felt So Seen: Neuroscience Says Having ADHD Can Be a Massive Brain Advantage (But Only If You Learn to Control It)'`,
    href: 'https://www.msn.com/en-us/health/other/ive-never-felt-so-seen-neuroscience-says-having-adhd-can-be-a-massive-brain-advantage-but-only-if-you-learn-to-control-it/ar-BB1i6iGB',
    description:
      'This is a story about ADHD and the big advantage that people who deal with this condition might have, especially in entrepreneurship, if they can learn to control it.',
    imageUrl:
      'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1i6z0j.img?w=768&h=356&m=6',
    date: 'Feb 13, 2024',
    datetime: '2024-02-13',
    category: { title: 'Inc', href: 'https://www.inc.com/' },
    author: {
      name: 'Bill Murphy Jr.',
      role: '',
      href: '#',
      imageUrl: ''
    }
  },

  {
    id: 3,
    title: `How ADHD affects mental health, as Ben Fogle opens up about diagnosis`,
    href: 'https://www.yahoo.com/style/adhd-mental-health-impact-ben-fogle-130732918.html',
    description:
      'The New Lives in the Wild star, 50, shared a personal post on his Instagram account and said he had recently been diagnosed with ADHD, following a "mental health storm".',
    imageUrl:
      'https://s.yimg.com/ny/api/res/1.2/.DDR5pl8F93xl.x0AohPsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAwO2NmPXdlYnA-/https://s.yimg.com/os/creatr-uploaded-images/2024-02/6a5c7aa0-c9a0-11ee-acdf-cdbddc0f3e44',
    date: 'Feb 12, 2024',
    datetime: '2024-02-12',
    category: { title: 'Yahoo Life', href: 'https://uk.style.yahoo.com/' },
    author: {
      name: 'Kate Ng',
      role: 'Trending Lifestyle Reporter',
      href: 'https://www.yahoo.com/author/kate-ng/',
      imageUrl: 'https://s.yimg.com/wv/images/alphatar_720x720_K_ald.jpg'
    }
  }
  // More posts...
]

export default function News() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Mental Health News
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Stay up to date with the latest news and trends in mental health.
          </p>
          <div className='mt-16 space-y-20 lg:mt-20 lg:space-y-20'>
            {posts.map((post) => (
              <article
                key={post.id}
                className='relative isolate flex flex-col gap-8 lg:flex-row'
              >
                <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                  <img
                    src={post.imageUrl}
                    alt=''
                    className='absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover'
                  />
                  <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
                </div>
                <div>
                  <div className='flex items-center gap-x-4 text-xs'>
                    <time dateTime={post.datetime} className='text-gray-500'>
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className='group relative max-w-xl'>
                    <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                      <a href={post.href}>
                        <span className='absolute inset-0' />
                        {post.title}
                      </a>
                    </h3>
                    <p className='mt-5 text-sm leading-6 text-gray-600'>
                      {post.description}
                    </p>
                  </div>
                  <div className='mt-6 flex border-t border-gray-900/5 pt-6'>
                    <div className='relative flex items-center gap-x-4'>
                      <img
                        src={post.author.imageUrl}
                        alt=''
                        className='h-10 w-10 rounded-full bg-gray-50'
                      />
                      <div className='text-sm leading-6'>
                        <p className='font-semibold text-gray-900'>
                          <a href={post.author.href}>
                            <span className='absolute inset-0' />
                            {post.author.name}
                          </a>
                        </p>
                        <p className='text-gray-600'>{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
