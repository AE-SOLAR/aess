import React from 'react';
import style from "./index.module.css";

function ShippingPage() {
  return (
    <div className="container">
      <div className="page">
        {/* Хлібні крихти */}
        <div className="breadcrumbs">
          <span>Homepage</span>
          <span>-</span>
          <span className="current">Shipping</span>
        </div>

        {/* Основний контент */}
        <main className="main-content">
          {/* Блок зображення та заголовків */}
          <section className="hero-section">
            <img src="https://via.placeholder.com/1440x330" alt="Hero" />
            <div className="overlay" />
            <div className="hero-text">
              <h1>Shipping</h1>
              <h2>Information</h2>
            </div>
          </section>

          {/* Текстовий контент */}
          <section className="text-content">
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

          {/* Методи доставки */}
          <section className="shipping-methods">
            <h2>Shipping methods</h2>
            <h3>Choose your delivery type</h3>
            <div className="methods">
              <div className="method-card">
                <div className="method-image">
                  {/* Зображення або іконка */}
                </div>
                <div className="method-info">
                  <h4>Standard Shipping</h4>
                  <p>2 - 3 working days</p>
                </div>
              </div>
              <div className="method-card selected">
                <div className="method-image">
                  {/* Зображення або іконка */}
                </div>
                <div className="method-info">
                  <h4>Desired delivery date</h4>
                  <p>Delivered on a date of your choice</p>
                </div>
              </div>
              <div className="method-card">
                <div className="method-image">
                  {/* Зображення або іконка */}
                </div>
                <div className="method-info">
                  <h4>Next day delivery</h4>
                  <p>Only possible with invoice orders</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Хедер видалено згідно з вашим запитом */}
      </div>
    </div>
  );
}

export default ShippingPage;