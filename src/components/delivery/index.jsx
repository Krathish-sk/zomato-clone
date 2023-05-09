import React from "react";
import Filter from "../filters";
import "./delivery.css";
import { GoSettings } from "react-icons/go";
import { BsArrowDownUp } from "react-icons/bs";
import DeliveryCollections from "./deliveryCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../exploreSection";
import { restaurants } from "../../Data/restaurants";

const deliveryFilter = [
  {
    id: "1",
    title: "Filters",
    icon: (
      <GoSettings
        className="absolute-center"
        style={{ transform: [{ rotate: "90deg" }] }}
      />
    )
  },
  {
    id: "2",
    title: "Rating: 4.0+"
  },
  {
    id: "3",
    title: "Safe and Hygenic"
  },
  {
    id: "4",
    title: "Pure Veg"
  },
  {
    id: "5",
    title: "Delivery Time",
    icon: <BsArrowDownUp className="absolute-center" />
  },
  {
    id: "6",
    title: "Great Offers"
  }
];

const restaurantList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilter} />
      </div>
      <div>
        <DeliveryCollections />
        <TopBrands />
        <ExploreSection
          list={restaurantList}
          collectionName="Delivery restaurants in your area"
        />
      </div>
    </div>
  );
};

export default Delivery;
