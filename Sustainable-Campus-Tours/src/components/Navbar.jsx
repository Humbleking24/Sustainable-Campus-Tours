import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-light" to="/">
                    Sustainable Campus
                </Link>
                <div className="d-flex align-items-center ms-auto">
                    <Link to="/map" className="btn btn-outline-light me-3">
                        Explore Map
                    </Link>
                    <FaUserCircle size={28} color="white"></FaUserCircle>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;