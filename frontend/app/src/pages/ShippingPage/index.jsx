import React from "react";
import "./Shipping.css";

export default function ShippingPage() {
  return (
    <div className="Shipping">
      <h1>Shipping</h1>
      <span>
        Together with our logistics service providers, we ensure that your
        ordered goods are delivered punctually and in good condition to you or
        directly to your customer. When will my order be delivered?
      </span>
      <span>
        Once your order has been shipped, you will receive a shipping
        confirmation by email. The delivery date depends on the selected
        shipping method. For delivery within Germany you can choose from
        different shipping methods:
      </span>
      <ul>
        <li>Standard Shipping (2 - 3 working days)</li>
        <li>Desired delivery date (delivered on a date of your choice)</li>
        <li>
          Next day delivery (only possible with invoice orders and will be
          delivered up to 12:00 at the latest))
        </li>
      </ul>
      <h2>Delivery abroad</h2>
      <span>
        Deliveries abroad are currently possible with standard shipping. Please
        note that the delivery time can be 2-4 working days longer.
      </span>
    </div>
  );
}
