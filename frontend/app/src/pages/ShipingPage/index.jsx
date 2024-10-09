import React from 'react';
import style from "./index.module.css";
import ShipingImg from "../../static/images/shiping/Shiping.png";
import { RedLine } from "../../components/ui/red-line";

function ShippingPage() {
  return (
    <div className={style.container}>
      <div className={style.page}>
        <div className={style.breadcrumbs}>
        </div>
        
        <main className={style.mainContent}>
          <section className={style.heroSection}>
            <div className={style.imageContainer}>
              <RedLine />
              <img src={ShipingImg} alt="ShippingImg" className={style.ShippingImg} />
              <RedLine />
              <div className={style.overlay} />
              <div className={style.heroText}>
                <h1 className={style.ShipingText}>Shipping</h1>
                <h2>Information</h2>
              </div>
            </div>
          </section>

          <section className={style.textContent}>
            <p>
              Together with our logistics service providers, we ensure that your
              ordered goods are delivered punctually and in good condition to you
              or directly to your customer. When will my order be delivered?
            </p>
            <p>
              Once your order has been shipped, you will receive a shipping
              confirmation by email. The delivery date depends on the selected
              shipping method.
            </p>
          </section>

          <section className={style.shippingMethods}>
            <h2>Shipping methods</h2>
            <h3>Choose your delivery type</h3>
            <div className={style.methods}>
              <div className={style.methodCard}>
                <div className={style.methodImage} />
                <div className={style.methodInfo}>
                  <h4>Standard Shipping</h4>
                  <p>2 - 3 working days</p>
                </div>
              </div>
              <div className={`${style.methodCard} ${style.selected}`}>
                <div className={style.methodImage} />
                <div className={style.methodInfo}>
                  <h4>Desired delivery date</h4>
                  <p>Delivered on a date of your choice</p>
                </div>
              </div>
              <div className={style.methodCard}>
                <div className={style.methodImage} />
                <div className={style.methodInfo}>
                  <h4>Next day delivery</h4>
                  <p>Only possible with invoice orders</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ShippingPage;
