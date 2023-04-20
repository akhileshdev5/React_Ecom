import React, { useContext, useState, useEffect } from "react";
import { AppCtnxt } from "../App";
import { fetchFeaturedProducts } from "../Utils/util";
import ProductCards from "./ProductCards";

const FeaturedProduct = () => {
  let d = useContext(AppCtnxt);

  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetchFeaturedProducts(setFeatured);
  }, []);

  const featuredProductIds = featured.map((product) => product.productId);
  const featuredProductsData = d.products.filter((product) =>
    featuredProductIds.includes(product.id)
  );
  return (
    <>
      <div>
        <ProductCards data={featuredProductsData} />
      </div>
    </>
  );
};

export default FeaturedProduct;
