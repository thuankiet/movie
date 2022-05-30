import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navbar = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Upcoming",
    path: "/upcoming",
  },
  {
    name: "Top Rated",
    path: "/top_rated",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = navbar.findIndex((e) => e.path === pathname);
  return (
    <nav
      ref={headerRef}
      className="navbar navbar-expand navbar-dark bg-primary"
    >
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          {navbar.map((nav, i) => {
            return (
              <li
                key={i}
                className={"nav-item " + `${i === active ? "active" : ""}`}
              >
                <Link to={nav.path}>{nav.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
