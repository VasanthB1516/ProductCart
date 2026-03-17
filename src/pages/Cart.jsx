import { useContext, useState } from "react";
import { ProductContext } from "../context/ProdContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, clearCart } = useContext(ProductContext);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const delivery = totalPrice > 0 ? 40 : 0;
  const tax = totalPrice * 0.05;
  const finalAmount = totalPrice + delivery + tax;

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#888",
        }}
      >
        <h2>Your Cart is Empty 🛒</h2>
        <p>Add some amazing products to continue shopping</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "40px",
        background: "#f4f6f8",
        minHeight: "90vh",
      }}
    >
      {/* LEFT → CART ITEMS */}
      <div style={{ flex: 3 }}>
        <h2 style={{ marginBottom: "25px", fontWeight: "600" }}>
          Shopping Cart
        </h2>

        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* RIGHT → ORDER SUMMARY */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            position: "sticky",
            top: "100px",
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>Order Summary</h3>

          <div
            style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}
          >
            <span>Subtotal</span>
            <strong>₹ {totalPrice.toFixed(2)}</strong>
          </div>

          <div
            style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}
          >
            <span>Delivery</span>
            <strong>₹ {delivery}</strong>
          </div>

          <div
            style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}
          >
            <span>Tax (5%)</span>
            <strong>₹ {tax.toFixed(2)}</strong>
          </div>

          <hr />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            <span>Total</span>
            <span style={{ color: "#28a745" }}>
              ₹ {finalAmount.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => {
              clearCart();
              setOrderPlaced(true);
            }}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              background: "linear-gradient(45deg,#00b09b,#96c93d)",
              color: "#fff",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* SUCCESS OVERLAY */}
      {orderPlaced && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center",
              width: "400px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#28a745",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 20px",
                fontSize: "40px",
                color: "#fff",
              }}
            >
              ✓
            </div>

            <h2 style={{ color: "#28a745" }}>Order Placed!</h2>
            <p style={{ color: "#777" }}>
              Thank you for shopping with us.
            </p>

            <button
              onClick={() => setOrderPlaced(false)}
              style={{
                marginTop: "20px",
                padding: "10px 25px",
                border: "none",
                background: "#28a745",
                color: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}