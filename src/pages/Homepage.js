import React from 'react'
import Hero from '../components/HomePage/Hero'
import SubHero from '../components/HomePage/SubHero'
import Section from '../components/HomePage/Section'
import Connects from '../components/HomePage/Connects'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <SubHero />
      <Section />
      <Connects />
    </div>
  )
}

export default Homepage