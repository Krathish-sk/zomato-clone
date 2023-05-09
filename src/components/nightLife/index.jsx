import React from "react";
import "./nightLife.css";
import { GoSettings } from "react-icons/go";
import { BsArrowDownUp } from "react-icons/bs";
import { nightLife } from "../../Data/nightLife";
import ExploreSection from "../exploreSection/index";
import Collection from "../collection/index";
import Filters from "../filters/index";

const nightFilter = [
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
    title: "Distance",
    icon: <BsArrowDownUp className="absolute-center" />
  },
  {
    id: "3",
    title: "Rating 4.0+"
  },
  {
    id: "4",
    title: "Pubs & Bars"
  }
];

const collectionList = [
  {
    strMeal: "19 Lit Party Places",
    strMealThumb:
      "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg?output-format=webp",
    idMeal: Math.random()
  },
  {
    strMeal: "17 Finest Microbreweries",
    strMealThumb:
      "https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078835.jpg?output-format=webp",
    idMeal: Math.random()
  },
  {
    strMeal: "10 Best Bars & Pubs",
    strMealThumb:
      "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1675239777.jpg",
    idMeal: Math.random()
  },
  {
    strMeal: "14 Screen RoofTop Places",
    strMealThumb:
      "https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674823998.jpg",
    idMeal: Math.random()
  },
  {
    strMeal: "23 Romantic Night Out Places",
    strMealThumb:
      "https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674824128.jpg",
    idMeal: Math.random()
  }
];

const nightList = nightLife;

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightFilter} />
      </div>
      <ExploreSection
        list={nightList}
        collectionName={"Night Life restaurants"}
      />
    </div>
  );
};

export default NightLife;
