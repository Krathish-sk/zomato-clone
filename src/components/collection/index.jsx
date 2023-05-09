import React from "react";
import "./collection.css";
import { AiFillCaretRight } from "react-icons/ai";
import Slider from "react-slick";
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const Collection = ({ list }) => {
  const renderdList = list.map((meal) => (
    <div key={meal.idMeal}>
      <div className="collection-cover cur-po">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="collection-image"
        />
        <div className="gradient-bg"></div>
        <div className="collection-card-title">{meal.strMeal}</div>
        <div className="collection-card-subtitle">
          <div>
            {Math.floor(Math.random() * 100)}
            {"  places"}
          </div>
          <AiFillCaretRight className="absolute-center" />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs and bars in
            your local area, based on trends
          </div>
          <div className="collection-location">
            <div className="cur-po">All Collections</div>
            <AiFillCaretRight className="absolute-center cur-po" />
          </div>
        </div>
        <Slider {...settings}>{renderdList}</Slider>
      </div>
    </div>
  );
};

export default Collection;
