import { useContext, useState } from "react";
import { ProductContext } from "../context/ProdContext";
import ProductCard from "../components/ProductCard";

export default function Home() {

    const { products } = useContext(ProductContext);

    const [category, setCategory] = useState("all");

    const categories = ["all", ...new Set(products.map(p => p.category))];

    const filteredProducts =
        category === "all"
            ? products
            : products.filter(p => p.category === category);

    return (
        <div className="container my-4">


            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="fst-italic text-secondary text-decoration-underline">Products</h2>

                <select
                    className="form-select w-auto"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat.toUpperCase()}
                        </option>
                    ))}
                </select>

            </div>


            <div className="row">

                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </div>
    );
}