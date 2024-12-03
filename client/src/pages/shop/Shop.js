import React, { useState } from "react";
import "./Shop.css";
import { PRODUCTS } from "../../products.jsx";
import Product from "./Product";

const Shop = () => {
  const [selectedProductType, setSelectedProductType] = useState("All");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleCategoryClick = (productType) => {
    setSelectedProductType(productType);
    filterProducts(productType, enteredPrice);
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    setEnteredPrice(price);
    filterProducts(selectedProductType, price);
  };

  const filterProducts = (productType, price) => {
    const filteredData = PRODUCTS.filter((item) => {
      const isMatchedProductType =
        productType === "All" || item.productType === productType;

      const isMatchedPrice = !price || Number(item.price) < Number(price);

      return isMatchedProductType && isMatchedPrice;
    });

    setFilteredProducts(filteredData);
  };

  return (
    <div className="Shop">
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Products</h1>

      <div className="categories">
        {["All", "mobile", "laptop", "headphones", "accessories"].map(
          (type) => (
            <button
              key={type}
              className={selectedProductType === type ? "active" : ""}
              onClick={() => handleCategoryClick(type)}
            >
              {type}
            </button>
          )
        )}
      </div>

      <div>
        <input
          type="number"
          placeholder="Search by price"
          value={enteredPrice}
          onChange={handlePriceChange}
        />
      </div>

      <div className="products card">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
