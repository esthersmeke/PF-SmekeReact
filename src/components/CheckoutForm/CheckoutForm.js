// CheckoutForm.js
import React, { useState } from "react";

const CheckoutForm = ({ onConfirm, total }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Name
          <input
            className="Input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label className="Label">
          Phone
          <input
            className="Input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label className="Label">
          Email
          <input
            className="Input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <div className="Label">
          <button type="submit" className="Button">
            Create Order
          </button>
        </div>
        {/* Agrega un campo para mostrar el total */}
        <div className="Label">
          <p>Total:{total}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
