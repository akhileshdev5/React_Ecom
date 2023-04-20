import React from "react";
import Header from "./Header";
import BG_PIC from "../Assets/IMG/BG_PIC.png";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import Filter from "./Filter";

const Main = (props) => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div style={{ height: "100vh", position: "relative" }}>
          <img style={{ objectFit: "fit" }} src={BG_PIC} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "25%",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          <h1 style={{ fontSize: "64px" }}>Latest Styles</h1>
          <p style={{ fontSize: "20px" }}>At Yesterdays Price</p>
          <Button>BROWSE ALL STYLES</Button>
        </div>
        <div className="main-container">
          <Filter /> <div className="content">{props.children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
