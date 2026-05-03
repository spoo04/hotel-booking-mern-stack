import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Vasati</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/booking">Rooms</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;