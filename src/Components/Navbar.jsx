// react
import { useState } from "react";

// react router
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Toggle open nav menu
  function handleClick() {
    setIsOpen(!isOpen);
  }

  // Set Nav bg color on scroll
  function handleScroll() {
    if (window.scrollY >= 1) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }
  window.addEventListener("scroll", handleScroll);

  // disable body scroll if mobile menu open
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <>
      <nav className={`main-nav ${isScrolling ? "is-scrolling" : ""}`}>
        <div className={`top-nav-mob ${isOpen ? "active" : ""}`}>
          <NavLink onClick={isOpen ? handleClick : undefined} to="/" className="nav-link" id="logo">
          BenMovie
          </NavLink>
          <div onClick={handleClick} className={`hamburger ${isOpen ? "active" : ""}`}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                onClick={isOpen ? handleClick : undefined}
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                onClick={isOpen ? handleClick : undefined}
                to="/movies"
                className="nav-link"
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                onClick={isOpen ? handleClick : undefined}
                to="/series"
                className="nav-link"
              >
                Series
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.8)",
                })}
                onClick={isOpen ? handleClick : undefined}
                to="/search"
                className="nav-link"
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
