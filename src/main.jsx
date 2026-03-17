import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import ProductProvider from "./context/ProdContext.jsx";

createRoot(document.getElementById("root")).render(
    <ProductProvider>
        <App />
    </ProductProvider>,
);
