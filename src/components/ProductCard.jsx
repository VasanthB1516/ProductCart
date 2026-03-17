import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";

export default function ProductCard({ product }) {
    const { addToCart } = useContext(ProductContext);

    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 shadow">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="card-img-top img-fluid w-100 object-fit-cover"
                    style={{ height: "300px" }}
                />

                <div className="card-body text-center">
                    <h5>{product.title}</h5>
                    <p className="text-success fw-bold">$ {product.price}</p>
                </div>
                <div className="card-footer text-center bg-light-subtle">
                    <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
