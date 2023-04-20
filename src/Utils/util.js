import axios from "axios";

export async function fetchProducts(setProducts, filters) {
  try {
    const response = await axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
      {
        headers: {
          Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
        },
      }
    );
    console.log(filters);
    const filteredProducts = response.data.products.filter((product) => {
      if (
        filters.colors.length > 0 &&
        !filters.colors.includes(product.colorId)
      ) {
        return false;
      }

      if (
        filters.materials.length > 0 &&
        !filters.materials.includes(product.materialId)
      ) {
        return false;
      }

      return true;
    });

    setProducts(filteredProducts);

    // setProducts(response.data.products)
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMaterial(setMaterial) {
  try {
    const response = await axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material",
      {
        headers: {
          Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
        },
      }
    );
    setMaterial(response.data.material);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchColor(setColor) {
  try {
    const response = await axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors",
      {
        headers: {
          Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
        },
      }
    );
    setColor(response.data.colors);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchFeaturedProducts(setFeature) {
  try {
    const response = await axios.get(
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/featured",
      {
        headers: {
          Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
        },
      }
    );
    setFeature(response.data.featured);
  } catch (error) {
    console.log(error);
  }
}

export function getColorName(colorId, colors) {
  const color = colors.find((c) => c.id === colorId);
  return color ? color.name : "";
}

export let getMaterialName = (materialId, materials) => {
  const material = materials.find((m) => m.id === materialId);
  return material ? material.name : "";
};
