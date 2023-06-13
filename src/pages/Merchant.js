import React from 'react'
import MerchantHero from './Merchant/MerchantHero'
import MerchantSection1 from './Merchant/MerchantSection1'
import MerchantSection2 from './Merchant/MerchantSection2'
import MerchantSection3 from './Merchant/MerchantSection3'
import MerchantSection4 from './Merchant/MerchantSection4'
import MerchantSection5 from './Merchant/MerchantSection5'

const Merchant = () => {
  return (
    <div>
      <MerchantHero />
      <MerchantSection1 />
      <MerchantSection2 />
      <MerchantSection3 />
      <MerchantSection4 />
      <MerchantSection5 />
    </div>
  )
}

export default Merchant