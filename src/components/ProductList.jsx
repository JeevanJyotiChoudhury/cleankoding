import React from "react";
import "../App.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-div">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p className="description">{product.description}</p>
            <p className="category">Category: {product.category}</p>
            <p className="price">Price: ${product.price.toFixed(2)}</p>
            <p className="rating">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
