import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../Assets/IMG/Cards.png";
import FooterLogo from "../Assets/IMG/FooterLogo.png";
const Footer = () => {
  let footerMenu = [
    {
      id: 1,
      name: "Home",
      url: "#",
    },
    {
      id: 2,
      name: "All Products",
      url: "#",
    },
    {
      id: 3,
      name: "Featured Products",
      url: "#",
    },
    {
      id: 4,
      name: "Contact",
      url: "#",
    },
    {
      id: 5,
      name: "About Us",
      url: "#",
    },
  ];
  return (
    <>
      <footer>
        <div className="footer">
          <div className="Logo-section">
            <span>
              RIGHT<strong>FIT.COM</strong>
            </span>
          </div>
          <div className="bottom-section">
            <div className="left-content">
              <Nav>
                {footerMenu.map((itm) => (
                  <NavItem key={itm.id}>
                    <Link to={itm.url}>{itm.name}</Link>
                  </NavItem>
                ))}
              </Nav>
            </div>
            <div className="middle-content">
              <p>
                We are a registered E-Commerce seller and we support a variety
                of Local and International payment modes
              </p>
              <span>
                <img style={{ width: "50%", height: "55px" }} src={Cards} />
              </span>
            </div>
            <div className="right-content">
              <p>Website protected by</p>
              <span>
                <img
                  style={{ width: "100%", height: "55px" }}
                  src={FooterLogo}
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
