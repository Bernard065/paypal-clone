import React from 'react'
import OnlinePaymentsHero from './OnlinePayments/OnlinePaymentsHero'
import Checkout from './OnlinePayments/Checkout'
import PaymentsSection from './OnlinePayments/PaymentsSection'
import Tabs from './OnlinePayments/Tabs'
import PaymentsSubSection from './OnlinePayments/PaymentsSubSection'
import CTA from './OnlinePayments/CTA'

const AcceptOnlinePayments = () => {
  return (
    <div>
      <OnlinePaymentsHero />
      <Checkout />
      <PaymentsSection />
      <Tabs />
      <PaymentsSubSection />
      <CTA />
    </div>
  )
}

export default AcceptOnlinePayments