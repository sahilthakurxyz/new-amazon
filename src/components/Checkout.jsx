import React from "react";

import "./Checkout.css";
import Subtotal from "./Subtotal.jsx";
import CheckOutProduct from "./CheckOutProduct.jsx";
import { useStateValue } from "../StateProvider";

// import { Email } from "@mui/icons-material";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log("checkout", basket);
  console.log(user, "......");
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGPNmhtHGnmrGY7FKGyzalhvzAIa2ljztpg&usqp=CAU"
          alt=""
        />
        <div className="user__login">
          <p>{user ? user.email : "No User"}</p>
        </div>
        <h2 className="checkout__title">Your Items</h2>

        {basket.map((items) => (
          <CheckOutProduct
            id={items.id}
            image={items.image}
            price={items.price}
            title={items.title}
            rating={items.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
