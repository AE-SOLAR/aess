import React from 'react'
import './Payments.css'

export default function Payments() {
  return (
    <div className='Payments'>
      <h1>Payments</h1>
      <h2>Which payment options are there?</h2>
      <p>You have the option to choose between payment on account with an individual payment term and payment in advance.
        The amount of the credit limit and your individual payment conditions are displayed under "My Account".
        Payment on account with an individual payment deadline is only possible after a successful credit check. Here we work together with the savings bank factoring and Euler Hermes.
        We reserve the right to carry out the delivery in individual cases only by prepayment by bank transfer.
        Cash payments are not possible.</p>
      <h2>Does AESOLAR shop offer discount?</h2>
      <p>In our online shop we always show you net / net prices.
        The discount deduction is therefore already included in the displayed prices.</p>
      <ul>
        <li>As far as you pay in advance, we grant you a 3% discount on the gross value of the order.</li>
        <li>When paying on account within the individually agreed period, we grant you up to 3% discount on the gross value of the order.</li>
      </ul>
    </div>
  )
}
