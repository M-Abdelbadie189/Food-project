import React, { useContext } from "react";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={`${name}`} />

        {cartItem[id] ? (
          <div className="food-item-counter">
            <img
              src="./remove_icon_red.png"
              alt="Remove"
              onClick={() => removeFromCart(id)}
              className="remove-icon"
            />
            <p>{cartItem[id]}</p>
            <img
              src="./add_icon_green.png"
              alt="Add"
              onClick={() => addToCart(id)}
              className="add-icon"
            />
          </div>
        ) : (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src="./add_icon_white.png"
            alt="Add"
          />
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src="./rating_starts.png" alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
