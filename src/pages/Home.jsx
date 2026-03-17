import { useContext, useState } from "react";
import { ProductContext } from "../context/ProdContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products } = useContext(ProductContext);

  const [category, setCategory] = useState("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div
      style={{
        background: "#f4f6f8",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          background:
            "linear-gradient(90deg, #1e3c72, #2a5298)",
          color: "#fff",
          padding: "60px 40px",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontWeight: "700", marginBottom: "10px" }}>
          Discover Amazing Products
        </h1>

        <p style={{ opacity: 0.9 }}>
          Shop the latest collections with best prices and fast delivery.
        </p>
      </div>

      {/* FILTER SECTION */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          padding: "0 40px",
          marginBottom: "30px",
        }}
      >
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setCategory(cat)}
            style={{
              border: "none",
              padding: "8px 18px",
              borderRadius: "25px",
              cursor: "pointer",
              background:
                category === cat
                  ? "linear-gradient(45deg,#ff7a18,#ffb347)"
                  : "#fff",
              color: category === cat ? "#fff" : "#333",
              fontWeight: "500",
              boxShadow:
                category === cat
                  ? "0 6px 15px rgba(0,0,0,0.2)"
                  : "0 4px 10px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
          gap: "25px",
          padding: "0 40px",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}