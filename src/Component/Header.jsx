import React, { useContext } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AppCtnxt } from "../App";
import CartLogo from "../Assets/IMG/CartLogo.png";

const Header = () => {
  let d = useContext(AppCtnxt);
  let totalNo = d.cartItems.length;
  let menu = [
    { id: 1, name: "All Products", icon: "", url: "/", count: "" },
    { id: 2, name: "Featured Products", icon: "", url: "/featured", count: "" },
    { id: 3, name: "", icon: CartLogo, url: "#", count: totalNo },
  ];
  let location = useLocation();
  return (
    <header>
      <div className="header">
        <div className="Logo-section">
          <span>
            RIGHT<strong>FIT.COM</strong>
          </span>
        </div>
        <div className="Menu-section">
          <Nav>
            {menu.map((itm) => (
              <NavItem
                key={itm.id}
                className={location.pathname === itm.url ? "active" : ""}
              >
                <Link to={itm.url}>
                  <span className="d-flex">
                    <img src={itm.icon} />
                    <strong> {itm.count}</strong> {itm.name}
                  </span>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
