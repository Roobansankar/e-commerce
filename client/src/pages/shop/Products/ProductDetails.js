import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../../products";
import { cartContext } from "../../../App";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id === parseInt(id));
  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = () => {
    const updatedProduct = { ...product, quantity: 1 };
    setCart([...cart, updatedProduct]);
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  const buyNow = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div>
      <div className="product-details-container">
        <div className="product-image-section">
          <img src={product.productImage} alt={product.productName} />
          <div className="product-actions">
            {cart.some((item) => item.id === product.id) ? (
              <button className=" add-to-cart-btn " onClick={removeCart}>
                Remove From Cart
              </button>
            ) : (
              <button onClick={addToCart} className=" add-to-cart-btn">
                Add to Cart
              </button>
            )}
            <button className="buy-now-btn" onClick={buyNow}>
              Buy Now
            </button>
          </div>
        </div>
        <div className="product-info-section">
          <h1>{product.productName}</h1>
          <h2>
            {product.offerPrice}{" "}
            <span className="original-price">{product.price}</span>{" "}
            <span className="discount">{product.offer} off</span>
          </h2>
          <p className="product-description">{product.productDescription}</p>
          <div className="product-offers">
            <p>
              <b>Bank Offer:</b> Get ₹50 Instant Discount on first Ekart UPI
              transaction on order of ₹200 and above
            </p>
            <p>
              <b>Bank Offer:</b>  40% Cashback on Ekart Axis Bank Card
            </p>
            <p>
              <b>Bank Offer:</b> Flat ₹1000 off on HDFC Bank Credit Card EMI
              Txns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
