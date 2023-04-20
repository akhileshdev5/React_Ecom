import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProduct from "./Component/AllProduct";
import FeaturedProduct from "./Component/FeaturedProduct";
import Main from "./Component/Main";
import { createContext, useState, useEffect } from "react";
import {
  fetchColor,
  fetchFeaturedProducts,
  fetchMaterial,
  fetchProducts,
} from "./Utils/util";

export const AppCtnxt = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts, filter);
    // fetchMaterial(setMaterial)
    // fetchColor(setColor)
  }, [filter]);

  useEffect(() => {
    localStorage.removeItem("CartDetail");
    localStorage.setItem("CartDetail", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <AppCtnxt.Provider
        value={{ products, cartItems, setCartItems, filter, setFilter }}
      >
        <BrowserRouter>
          <Main>
            <Routes>
              <Route exact path="/" element={<AllProduct />} />
              <Route path="/featured" element={<FeaturedProduct />} />
            </Routes>
          </Main>
        </BrowserRouter>
      </AppCtnxt.Provider>
    </>
  );
}

export default App;
