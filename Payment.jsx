function Payment() {
  return (
    <div className="page">
      <div className="box">
        <h1>💳 Payment Page</h1>

        <input type="text" placeholder="Card Holder Name" />
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="MM/YY" />
        <input type="password" placeholder="CVV" />

        <button>Pay Now</button>
      </div>
    </div>
  );
}

export default Payment;