import React from 'react';
import style from './index.module.css';
import PaymentsImg1 from '../../static/images/payment/payment_1.png';
import PaymentsImg2 from '../../static/images/payment/payment_2.png';
import PaymentsImg from '../../static/images/payment/Payment.png';
import { RedLine } from '../../components/ui/red-line';

export default function Payments() {
  return (
    <>
      <div className={style.Payments}>
        <div className={style.PaymentsHeader}>
          <RedLine /> 
          <img src={PaymentsImg} alt='Payments' className={style.PaymentsImage} />
          <RedLine />
          <h1 className={style.PaymentsTitle}>Payments</h1>
          <h1 className={style.InformationTitle}>Information</h1>
        </div>

        <h2 className={style.WhichText}>Which payment options are there?</h2>
        <p className={style.PaymentText}>
          You have the option to choose between payment on account with an individual payment term and payment in advance.
          The amount of the credit limit and your individual payment conditions are displayed under "My Account".
          Payment on account with an individual payment deadline is only possible after a successful credit check.
          We work together with the savings bank factoring. We reserve the right to carry out the delivery in individual
          cases only by prepayment by bank transfer. Cash payments are not possible.
        </p>

        <h2 className={style.PaymentMethods}>Payment Methods</h2>
        <h2 className={style.Choose_h2}>Choose Your Payment Type And Get Discount</h2>

        <div className={style.PaymentsImgBlock}>
          <div className={style.PaymentOption}>
            <img src={PaymentsImg1} alt='Pay in advance' />
            <div className={style.PaymentTextBlock}>
              <h2 className={style.PaymentImg1}>Pay in advance</h2>
              <p className={style.TextBox}>As far as you pay in advance, we grant you a 3% discount on the gross value of the order.</p>
            </div>
          </div>

          <div className={style.PaymentOption}>
            <img src={PaymentsImg2} alt='Payment on account' />
            <div className={style.PaymentTextBlock}>
              <h2 className={style.PaymentImg2}>Payment on account</h2>
              <p className={style.TextBox}>When paying on account within the individually agreed period, we grant you up to 3% discount on the gross value of the order.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.lineDown}>
        <RedLine />
      </div>
    </>
  );
}
