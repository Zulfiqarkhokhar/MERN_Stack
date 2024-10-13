import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Lenovo ITE core i7 11gen",
    price: 120000,
    availability: "In Stock",
  };

  return (
    <div>
      <h1>Name: {product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductInfo;
