import React, { useContext } from "react";
import { AppCtnxt } from "../App";
import ProductCards from "./ProductCards";

const AllProduct = () => {
  let d = useContext(AppCtnxt);

  return (
    <>
      <div>
        <ProductCards data={d.products} />
      </div>
    </>
  );
};

export default AllProduct;
