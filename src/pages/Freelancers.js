import React from 'react'
import FreelancerHero from './Freelancers/FreelancerHero'
import Why from './Freelancers/Why'
import SubHero from '../components/HomePage/SubHero'
import Looking from './Freelancers/Looking'
import GetStarted from './Freelancers/GetStarted'
const Freelancers = () => {
  return (
    <div>
      <FreelancerHero />
      <Why />
      <SubHero />
      <Looking />
      <GetStarted />
    </div>
  )
}

export default Freelancers