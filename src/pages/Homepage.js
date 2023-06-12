import React from 'react'
import Hero from '../components/HomePage/Hero'
import SubHero from '../components/HomePage/SubHero'
import Section from '../components/HomePage/Section'
import Connects from '../components/HomePage/Connects'
import ActiveAccounts from '../components/HomePage/ActiveAccounts'
import Signup from '../components/HomePage/Signup'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <SubHero />
      <Section />
      <Connects />
      <ActiveAccounts />
      <Signup />
      <Footer />
    </div>
  )
}

export default Homepage