import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>HealthCare+</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/history">Appointments</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;