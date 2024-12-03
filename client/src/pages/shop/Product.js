import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/product/${product.id}`}>
        <img src={product.productImage} alt={product.productImage} />
      </Link>
      <div className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <h6>Price: ${product.offerPrice}</h6>
      </div>
    </div>
  );
};

export default Product;
