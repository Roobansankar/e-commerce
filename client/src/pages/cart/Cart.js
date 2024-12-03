import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const updatedTotal = cart.reduce(
      (acc, curr) => acc + parseInt(curr.price) * curr.quantity,
      0
    );
    setTotal(updatedTotal);
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.id === product.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1 className="cart-heading" style={{ marginTop: "30px" }}>
          Cart Products
        </h1>
      </div>

      <div className="cart-items">
        {cart.map((product) => (
          <div className="cartItem">
            <img src={product.productImage} />
            <div className="description">
              <p>
                <b>{product.productName}</b>
              </p>
              <p>${product.price}</p>

              <div className="countHandler">
                <button
                  onClick={() => decreaseQuantity(product)}
                  className="minus"
                >
                  -
                </button>

                <span className="input">{product.quantity}</span>
             
                <button onClick={() => increaseQuantity(product)}>+</button>
              </div>

              <button
                className="btnRemove2"
                onClick={() => removeFromCart(product)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {total > 0 ? (
        <div className="checkout">
          <h3> Subtotal: ${total} </h3>
          <button
            onClick={() => navigate("/")}
            style={{ marginBottom: "20px" }}
          >
            {" "}
            Continue Shopping{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
