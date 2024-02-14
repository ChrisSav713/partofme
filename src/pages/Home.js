import React from 'react'
import Panel from '../components/Panel'
import Divider from '../components/Divider'
import Logo from '../components/Logo'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div className='App'>
      <Panel>
        <Logo />
      </Panel>
      <Divider title='Our Practice' />
      <Panel>
        <h1>Panel</h1>
      </Panel>
      <Panel>
        <Testimonial />
      </Panel>
    </div>
  )
}
