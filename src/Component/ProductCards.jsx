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
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchColor(setColor);
    fetchMaterial(setMaterial);
  }, []);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    d.setCartItems(cart);
  };
  
  const itemsPerPage = 6;

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = data.slice(start, end);
  // console.log(data[0].name)
  return (
  <div>
    <div className="product-wrapper">
      {/* <img src={data.image}></img>
       */}
      {data.length > 0 ? (
        <>
          {" "}
          {currentData.map((itm) => (
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
    <div className="button-action">
            <Button variant="primary" onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</Button>
            <Button variant="primary" onClick={() => setPage(page + 1)} disabled={end >= data.length}>Next</Button>
          </div>
    </div>
  );
};

export default ProductCards;
