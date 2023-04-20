import React, { useContext, useEffect, useState } from "react";
import { fetchColor, fetchMaterial } from "../Utils/util";
import { AppCtnxt } from "../App";

const Filter = () => {
  let [color, setColor] = useState([]);
  let [material, setMaterial] = useState([]);
  let [filters, setFilters] = useState({
    colors: [],
    materials: [],
  });
  const { setFilter } = useContext(AppCtnxt);
  useEffect(() => {
    fetchColor(setColor);
    fetchMaterial(setMaterial);
  }, []);

  const setColorFilter = (newColors) => {
    setFilters((prevState) => ({
      ...prevState,
      colors: [...prevState.colors, newColors],
    }));
  };

  const setMaterialFilter = (newMaterials) => {
    setFilters((prevState) => ({
      ...prevState,
      materials: [...prevState.materials, newMaterials],
    }));
  };

  useEffect(() => {
    setFilter(filters); // update context state with latest filters value
  }, [filters]);

  return (
    <div className="filter-container">
      <h5>Filter</h5>
      <div className="materials">
        <h6>Color</h6>
        <span
          style={{ cursor: "pointer" }}
          className={filters.colors.length === 0 ? "active" : ""}
          onClick={() => setFilters((prev) => ({ ...prev, colors: [] }))}
        >
          All
        </span>
        {color.map((itm) => (
          <span
            style={{ cursor: "pointer" }}
            key={itm.id}
            onClick={() => setColorFilter(itm.id)}
            className={filters.colors.includes(itm.id) ? "active" : ""}
          >
            {itm.name}
          </span>
        ))}
      </div>
      <div className="materials mt-5 mb-5">
        <h6>Material</h6>
        <span
          style={{ cursor: "pointer" }}
          className={filters.materials.length === 0 ? "active" : ""}
          onClick={() => setFilters((prev) => ({ ...prev, materials: [] }))}
        >
          All
        </span>
        {material.map((itm) => (
          <span
            key={itm.id}
            style={{ cursor: "pointer" }}
            onClick={() => setMaterialFilter(itm.id)}
            className={filters.materials.includes(itm.id) ? "active" : ""}
          >
            {itm.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filter;
