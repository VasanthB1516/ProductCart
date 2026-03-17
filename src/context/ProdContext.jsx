import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* ================= FETCH PRODUCTS ================= */
  async function getProducts() {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/products");

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  /* ================= CART PERSISTENCE ================= */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ================= ADD TO CART ================= */
  function addToCart(product) {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  }

  /* ================= REMOVE ================= */
  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  /* ================= INCREASE ================= */
  function increaseQty(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  /* ================= DECREASE ================= */
  function decreaseQty(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  }

  /* ================= CLEAR ================= */
  function clearCart() {
    setCart([]);
  }

  /* ================= DERIVED VALUES ================= */
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        loading,
        error,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}