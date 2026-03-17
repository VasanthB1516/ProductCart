import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div>
      <div
        style={{
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          transition: "0.35s",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-8px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0px)")
        }
      >
        {/* IMAGE */}
        <div
          style={{
            height: "260px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.4s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />

          {/* PRICE BADGE */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "linear-gradient(45deg,#ff7a18,#ffb347)",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            ₹ {product.price}
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: "18px",
            textAlign: "center",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h4
            style={{
              marginBottom: "12px",
              fontWeight: "600",
              fontSize: "18px",
              minHeight: "48px",
            }}
          >
            {product.title}
          </h4>

          <button
            onClick={() => addToCart(product)}
            style={{
              border: "none",
              background: "linear-gradient(45deg,#36d1dc,#5b86e5)",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "30px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              cursor: "pointer",
              transition: "0.3s",
              marginTop: "auto",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}