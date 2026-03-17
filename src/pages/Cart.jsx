import { useContext, useState } from "react";
import { ProductContext } from "../context/ProdContext";
import CartItem from "../components/CartItem";

export default function Cart() {

    const { cart, clearCart } = useContext(ProductContext);

    const [showSummary, setShowSummary] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const deliveryCharge = 10;
    const tax = totalPrice * 0.05;
    const finalAmount = totalPrice + deliveryCharge + tax;

    if (cart.length === 0 && !showSuccess) {
    return (
        <div className="container mt-5 text-center text-danger">
            <h3>Your cart is empty...</h3>
        </div>
    );
}

    return (
        <div className="container my-5">

            <h2 className="mb-4">Shopping Cart</h2>

            {cart.map((item) => (
                <CartItem key={item.id} item={item} />
            ))}

            <hr />

            <div className="text-end mb-3">
                <h4>Total: $ {totalPrice.toFixed(2)}</h4>
            </div>

            <div className="text-end">
                <button
                    className="btn btn-success"
                    onClick={() => setShowSummary(true)}
                >
                    Place Order
                </button>
            </div>


            {showSummary && (
                <div
                    className="modal fade show d-block"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content shadow border-0">

                            <div className="modal-header bg-dark text-white">
                                <h5 className="modal-title">
                                    <i className="fa-solid fa-receipt me-2"></i>
                                    Order Summary
                                </h5>

                                <button
                                    className="btn-close btn-close-white"
                                    onClick={() => setShowSummary(false)}
                                ></button>
                            </div>

                            <div className="modal-body">

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Products Total</span>
                                    <strong>$ {totalPrice.toFixed(2)}</strong>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Delivery Charge</span>
                                    <strong>$ {deliveryCharge}</strong>
                                </div>

                                <div className="d-flex justify-content-between mb-2">
                                    <span>Tax (5%)</span>
                                    <strong>$ {tax.toFixed(2)}</strong>
                                </div>

                                <hr />

                                <div className="d-flex justify-content-between fs-5">
                                    <strong>Total Payable</strong>
                                    <strong className="text-success">
                                        $ {finalAmount.toFixed(2)}
                                    </strong>
                                </div>

                            </div>

                            <div className="modal-footer justify-content-center">

                                <button
                                    className="btn btn-success px-4"
                                    onClick={() => {
                                        setShowSummary(false);
                                        clearCart();
                                        setShowSuccess(true);
                                    }}
                                >
                                    <i className="fa-solid fa-credit-card me-2"></i>
                                    Pay Now
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            )}


            {showSuccess && (
                <div
                    className="modal fade show d-block"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content border-0 shadow text-center p-4">

                            <div
                                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    fontSize: "35px"
                                }}
                            >
                                <i className="fa-solid fa-check"></i>
                            </div>

                            <h3 className="text-success fw-bold">
                                Congratulations!
                            </h3>

                            <p className="text-muted">
                                Your order has been placed successfully.
                            </p>

                            <small className="text-secondary">
                                Thank you for shopping with us.
                            </small>

                            <button
                                className="btn btn-success mt-4 px-4"
                                onClick={() => setShowSuccess(false)}
                            >
                                Continue Shopping
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}