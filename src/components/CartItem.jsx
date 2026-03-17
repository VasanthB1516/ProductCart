import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";

export default function CartItem({ item }) {
    const { increaseQty, decreaseQty, removeFromCart } =
        useContext(ProductContext);

    return (
        <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
                <div className="col-md-2">
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="img-fluid rounded-start"
                        style={{ height: "120px", objectFit: "cover" }}
                    />
                </div>

                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="text-muted">₹ {item.price}</p>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => decreaseQty(item.id)}
                    >
                        -
                    </button>

                    <span className="mx-3 fw-bold">{item.qty}</span>

                    <button
                        className="btn btn-success btn-sm"
                        onClick={() => increaseQty(item.id)}
                    >
                        +
                    </button>
                </div>

                <div className="col-md-2 text-center">
                    <strong>$ {(item.price * item.qty).toFixed(2)}</strong>
                </div>

                <div className="col-md-1 text-center">
                    <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <i className="fa-solid fa-x"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
