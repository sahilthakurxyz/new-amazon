import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./Product.css";
import { useStateValue } from "../StateProvider";
function Product({ title, price, rating, image, height, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToStore = () => {
    console.log("add in the basket", basket);
    // store the information into basket or in the store
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        // rating: rating,
      },
    });
  };
  return (
    <div key={id} className="product">
      <div className="product__info">
        <p key={id}>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong key={id}>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((p, i) => (
              <p>
                <StarBorderIcon className="rating__icon" />
              </p>
            ))}
        </div>
      </div>
      <img height={height} src={image} alt="headphone_image-network_problem" />
      <button onClick={addToStore}>Add to Store</button>
    </div>
  );
}

export default Product;
