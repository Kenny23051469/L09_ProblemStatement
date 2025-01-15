import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rp-logo.png";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Republic Polytechnic Logo"
          title="Republic Polytechnic | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/diplomas" className={getClass}>
          Diplomas
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
        <NavLink to="/faq" className={getClass}>
          FAQ
        </NavLink>
      </nav>
    </header>
  );
}
