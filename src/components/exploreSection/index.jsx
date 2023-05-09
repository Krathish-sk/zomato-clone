import React from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({ list, collectionName }) => {
  const renderdList = list.map((restaurant) => {
    return <ExploreCard key={restaurant.info.resId} restaurant={restaurant} />;
  });

  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">{renderdList}</div>
    </div>
  );
};

export default ExploreSection;
