import React from 'react'
import InvoiceHero from './Invoices/InvoiceHero'
import InvoiceSection from './Invoices/InvoiceSection'
import HowItWorks from './Invoices/HowItWorks'
import SendingInvoices from './Invoices/SendingInvoices'
import Convert from './Invoices/Convert'
import GetPaid from './Invoices/GetPaid'


const SendInvoice = () => {
  return (
    <div>
      <InvoiceHero />
      <InvoiceSection />
      <HowItWorks />
      <SendingInvoices />
      <Convert />
      <GetPaid />
    </div>
  )
}

export default SendInvoice