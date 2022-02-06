import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey = 'pk_test_51KQDoHIqwRQqjegVoXZoYhkCn4Nn7S0wqtyZY0O78tBmmZgoUE4GBWyGtpPWYa089xPXMIp1F3sNIAurvVYuGNob008sCB9Eol'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      panelLabel='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceInCents}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
