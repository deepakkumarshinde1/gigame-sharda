import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <p>Header</p>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;
