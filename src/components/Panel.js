import React, { Children } from 'react'

function Panel({ children }) {
  return (
    <div>
      <div className='my-5 overflow-hidden bg-white shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>{children}</div>
      </div>
    </div>
  )
}

export default Panel
