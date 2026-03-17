import { useContext } from "react";
import { ProductContext } from "../context/ProdContext";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { cart } = useContext(ProductContext);

    const totalItems = cart.length;

    return (
        <nav className="navbar navbar-dark bg-dark p-3 sticky-top shadow">

            <Link className="navbar-brand text-white" to="/">
                <h3 className="text-warning m-0">🛒 Cart Project</h3>
            </Link>

            <Link to="/cart" className="btn btn-warning position-relative me-3">
                <i className="fa-solid fa-cart-shopping"></i> Cart

                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                </span>

            </Link>
        </nav>
    );
}