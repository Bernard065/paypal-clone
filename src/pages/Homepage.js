import React from 'react'
import Hero from '../components/HomePage/Hero'
import SubHero from '../components/HomePage/SubHero'
import Section from '../components/HomePage/Section'
import Connects from '../components/HomePage/Connects'
import ActiveAccounts from '../components/HomePage/ActiveAccounts'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <SubHero />
      <Section />
      <Connects />
      <ActiveAccounts />
    </div>
  )
}

export default Homepage