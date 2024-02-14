import React, { useEffect } from 'react'

export default function Other() {
  useEffect(() => {
    const myInterval = setInterval(activate, 10)
    return () => clearInterval(myInterval)
  }, [])

  const activate = () => {
    const child = document.getElementsByClassName('child')[0]
    child.classList.add('active')
  }

  return (
    <div className='parent'>
      <div className='child' onClick={activate}></div>
    </div>
  )
}
