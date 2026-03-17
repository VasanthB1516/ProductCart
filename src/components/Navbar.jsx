import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cart } = useContext(ProductContext);
  const totalItems = cart.length;

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #141e30, #243b55)",
        padding: "14px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
      }}
    >
      {/* LOGO */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            background: "#ffd43b",
            padding: "8px 12px",
            borderRadius: "10px",
            fontSize: "20px",
          }}
        >
          🛒
        </div>

        <h2
          style={{
            color: "#fff",
            margin: 0,
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          MyCart
        </h2>
      </Link>

      {/* RIGHT SECTION */}
      <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
        {/* CART BUTTON */}
        <Link
          to="/cart"
          style={{
            position: "relative",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              padding: "10px 22px",
              borderRadius: "40px",
              color: "#fff",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "0.3s",
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div>

          {/* BADGE */}
          <span
            style={{
              position: "absolute",
              top: "-6px",
              right: "-10px",
              background: "#ff4757",
              color: "#fff",
              fontSize: "12px",
              fontWeight: "600",
              padding: "4px 7px",
              borderRadius: "50%",
              boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
            }}
          >
            {totalItems}
          </span>
        </Link>
      </div>
    </nav>
  );
}