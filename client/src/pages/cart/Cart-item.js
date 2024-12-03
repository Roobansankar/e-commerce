// import React, { useContext } from "react";
// import "./Cart.css";
// import { ShopContext } from "../../context/Shop-context";

// export default function CartItem(props) {
//   const { id, productName, price, productImage } = props.data;
//   const { cartItems, addToCart, removeCartItems, updateCartItemCount } =
//     useContext(ShopContext);
//   return (
//     <div className="cartItem">
//       <img src={productImage} />
//       <div className="description">
//         <p>
//           <b>{productName}</b>
//         </p>
//         <p>${price}</p>

//         <div className="countHandler">
//           <button onClick={() => removeCartItems(id)}>-</button>

//           <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//           />

//           <button onClick={() => addToCart(id)}>+</button>
//         </div>
//       </div>
//     </div>
//   );
// }
