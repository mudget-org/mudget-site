'use client'

import Script from 'next/script'

export default function StripePricingTable() {
  return (
    <>
      <Script src="https://js.stripe.com/v3/pricing-table.js" async />
      <stripe-pricing-table 
        pricing-table-id="prctbl_1QbTkPFxVqqpKakgRelTIA0M"
        publishable-key="pk_test_51QRzvvFxVqqpKakgrkvWS32DWcsHd1PQtI6Vx2vbodkhMDIfUw1A3KkH15de08ydmhnjXd2lKwwkCWQ8LIZkyTmX00wON7ix5T"
      />
    </>
  )
}

