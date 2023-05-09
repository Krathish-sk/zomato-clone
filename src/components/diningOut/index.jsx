import axios from "axios";
import React, { useEffect, useState } from "react";
import Collection from "../collection";
import "./diningOut.css";
import { GoSettings } from "react-icons/go";
import { diningOut } from "../../Data/dining";
import Filters from "../filters/index";
import ExploreSection from "../exploreSection/index";

const diningFilter = [
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
    title: "Outdoor Seatings"
  },
  {
    id: "4",
    title: "Serves Alcohol"
  },
  {
    id: "5",
    title: "Open Now"
  }
];

const diningList = diningOut;

const DiningOut = () => {
  const [collectionList, setCollectionList] = useState([]);

  const getCollectionListData = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    setCollectionList(data.meals);
  };

  useEffect(() => {
    getCollectionListData();
  }, []);

  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilter} />
      </div>
      <ExploreSection list={diningList} collectionName="Dine out restaurants" />
    </div>
  );
};

export default DiningOut;
