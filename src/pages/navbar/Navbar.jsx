import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div>
          <img src="/assets/mexill.png" alt="" className="mexilLogo" />
        </div>

        <div>
          <div className="navbar-links">
            <div className="navbarLink">
              <Link to="/home">Home</Link>
            </div>

            <div className="navbarLink">
              <Link to="/about">About Us</Link>
            </div>

            <div className="navbarLink">
              <Link to="/servics">Services</Link>
            </div>
            <div className="navbarLink">
              <Link to="/projects">Our Projects</Link>
            </div>
            <div className="navbarLink">
              <Link to="/blog">Blog</Link>
            </div>
            <div className="navbarLink">
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
        </div>

        <div className="navbarButton">Get in Touch</div>
      </div>
    </nav>
  );
}
