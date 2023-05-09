import React from "react";
import "./deliveryItem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div>
      <div className="delivery-item-cover cur-po">
        <img
          src={item.strCategoryThumb}
          alt={item.strCategory}
          className="delivery-item-image"
        />
      </div>
      <div className="delivery-item-title">{item.strCategory}</div>
    </div>
  );
};

export default DeliveryItem;
