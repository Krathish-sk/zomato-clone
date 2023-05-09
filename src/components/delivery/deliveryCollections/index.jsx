import React, { useEffect, useState } from "react";
import "./deliveryCollections.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";
import DeliveryItem from "./deliveryItem";
import axios from "axios";

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

// const data = [
//   {
//     strMeal: "Chicken Handi",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
//     idMeal: "52795"
//   },
//   {
//     strMeal: "Dal fry",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
//     idMeal: "52785"
//   },
//   {
//     strMeal: "Kidney Bean Curry",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
//     idMeal: "52868"
//   },
//   {
//     strMeal: "Lamb Biryani",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
//     idMeal: "52805"
//   },
//   {
//     strMeal: "Lamb Rogan josh",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg",
//     idMeal: "52808"
//   },
//   {
//     strMeal: "Matar Paneer",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
//     idMeal: "52865"
//   },
//   {
//     strMeal: "Nutty Chicken Curry",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
//     idMeal: "52851"
//   },
//   {
//     strMeal: "Recheado Masala Fish",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
//     idMeal: "52809"
//   },
//   {
//     strMeal: "Smoked Haddock Kedgeree",
//     strMealThumb: "https://www.themealdb.com/images/media/meals/1550441275.jpg",
//     idMeal: "52964"
//   },
//   {
//     strMeal: "Tandoori chicken",
//     strMealThumb:
//       "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
//     idMeal: "52806"
//   }
// ];

const DeliveryCollections = () => {
  const [dataCollection, setDataCollection] = useState([]);

  const getIndianMeal = async () => {
    const { data } = await axios(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setDataCollection(data.categories);
  };

  useEffect(() => {
    getIndianMeal();
  }, []);

  const renderdItem = dataCollection.map((item) => {
    return <DeliveryItem item={item} key={item.idCategory} />;
  });

  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>{renderdItem}</Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
