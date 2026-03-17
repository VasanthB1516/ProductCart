import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } =
    useContext(ProductContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        borderRadius: "14px",
        padding: "18px",
        marginBottom: "18px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        transition: "0.3s",
      }}
    >
      {/* LEFT → IMAGE */}
      <div style={{ flex: "0.8" }}>
        <img
          src={item.thumbnail}
          alt={item.title}
          style={{
            width: "110px",
            height: "110px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* CENTER → DETAILS */}
      <div style={{ flex: "2.5", paddingLeft: "20px" }}>
        <h4 style={{ margin: "0 0 8px", fontWeight: "600" }}>
          {item.title}
        </h4>

        <p style={{ margin: "0", color: "#777", fontSize: "14px" }}>
          Price: ₹ {item.price}
        </p>

        <p style={{ marginTop: "6px", fontSize: "13px", color: "#28a745" }}>
          In Stock
        </p>
      </div>

      {/* QUANTITY CONTROLLER */}
      <div style={{ flex: "1.5", textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: "50px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => decreaseQty(item.id)}
            style={{
              border: "none",
              background: "#f8f9fa",
              padding: "8px 14px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            −
          </button>

          <span
            style={{
              padding: "0 16px",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {item.qty}
          </span>

          <button
            onClick={() => increaseQty(item.id)}
            style={{
              border: "none",
              background: "#f8f9fa",
              padding: "8px 14px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* TOTAL PRICE */}
      <div style={{ flex: "1.5", textAlign: "center" }}>
        <h5 style={{ fontWeight: "700", marginBottom: "6px" }}>
          ₹ {(item.price * item.qty).toFixed(2)}
        </h5>

        <p style={{ fontSize: "12px", color: "#888" }}>Total</p>
      </div>

      {/* REMOVE BUTTON */}
      <div style={{ flex: "0.7", textAlign: "right" }}>
        <button
          onClick={() => removeFromCart(item.id)}
          style={{
            background: "#ff4d4f",
            border: "none",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}