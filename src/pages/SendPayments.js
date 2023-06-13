import React from 'react'
import SendPaymentsHero from './SendPayments/SendPaymentsHero'
import WaysToPay from './SendPayments/WaysToPay'
import SendPaymentsImageGrids from './SendPayments/SendPaymentsImageGrids'

const SendPayments = () => {
  return (
    <div>
      <SendPaymentsHero />
      <WaysToPay />
      <SendPaymentsImageGrids />
    </div>
  )
}

export default SendPayments