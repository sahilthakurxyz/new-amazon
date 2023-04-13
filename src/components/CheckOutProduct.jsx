import React from "react";
import "./CheckOutProduct.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useStateValue } from "../StateProvider";

function CheckOutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeToStore = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__content">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">${price}</p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()

            .map((_, i) => (
              <p>
                <StarBorderIcon className="rating__icon" />
              </p>
            ))}
        </p>
        <button onClick={removeToStore}>remove from store</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
