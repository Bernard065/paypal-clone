import React from 'react'
import Hero from './PayOnline/Hero'
import Speed from './PayOnline/Speed'
import ImageGrids from './PayOnline/ImageGrids'
import PayOnlineSection from './PayOnline/PayOnlineSection'
import Signup from '../components/HomePage/Signup'

const   PayOnline = () => {
  return (
    <div>
      <Hero />
      <Speed />
      <ImageGrids />
      <PayOnlineSection />
      <Signup />
    </div>
  )
}

export default   PayOnline