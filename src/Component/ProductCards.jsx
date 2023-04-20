import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import {
  fetchColor,
  fetchMaterial,
  getColorName,
  getMaterialName,
  //   handleAddToCart
} from "../Utils/util";
import { AppCtnxt } from "../App";

const ProductCards = ({ data }) => {
  let d = useContext(AppCtnxt);
  const [material, setMaterial] = useState([]);
  const [color, setColor] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchColor(setColor);
    fetchMaterial(setMaterial);
  }, []);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    d.setCartItems(cart);
  };

  // console.log(data[0].name)
  return (
    <div className="product-wrapper">
      {/* <img src={data.image}></img>
       */}
      {data.length > 0 ? (
        <>
          {" "}
          {data.map((itm) => (
            <Card style={{ width: "18rem", border: "none" }} key={itm.id}>
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" src={itm.image} />
                <div className="overlay">
                  <Button onClick={() => handleAddToCart(itm)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
              <Card.Body>
                <Card.Title>{itm.name}</Card.Title>
                <Card.Text>
                  <span style={{ color: "rgb(0, 0, 0)" }}>
                    <strong>{getColorName(itm.colorId, color)}</strong>
                  </span>
                  <span style={{ color: "rgb(0, 0, 0)" }} className="ms-2">
                    {getMaterialName(itm.materialId, material)}
                  </span>
                  <p style={{ color: "rgba(90, 17, 43, 1)" }}>INR{itm.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
      ) : (
        <h2>No records</h2>
      )}
    </div>
  );
};

export default ProductCards;
