import React from "react";
import Slider from "react-slick";
import "./topBrands.css";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";

const topBrandsList = [
  {
    id: "1",
    name: "Meghana Foods",
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png"
  },
  {
    id: "2",
    name: "Tuffles",
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png"
  },
  {
    id: "3",
    name: "Domino's Pizza",
    time: "20 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png"
  },
  {
    id: "4",
    name: "Mc Delivery",
    time: "21 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png"
  },
  {
    id: "5",
    name: "KFC",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png"
  },
  {
    id: "6",
    name: "Burger King",
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png"
  },
  {
    id: "7",
    name: "Pizza Hut",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png"
  },
  {
    id: "8",
    name: "Haldiram's",
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png"
  }
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed: 1000,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const TopBrands = () => {
  const renderdTopBrandsList = topBrandsList.map((item) => {
    return (
      <div key={item.id}>
        <div className="top-brands-cover cur-po">
          <img src={item.cover} alt={item.name} className="top-brands-image" />
        </div>
      </div>
    );
  });
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>{renderdTopBrandsList}</Slider>
    </div>
  );
};

export default TopBrands;
