import React from "react";
import "./tabOptions.css";

const tabs = [
  {
    id: "1",
    name: "Delivery",
    activeImage:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    backDrop: "#FCEEC0",
    inactiveImage:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
  },
  {
    id: "2",
    name: "Dining Out",
    activeImage:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backDrop: "#E5F3F3",
    inactiveImage:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
  },
  {
    id: "3",
    name: "NightLife",
    activeImage:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backDrop: "#EDf4FF",
    inactiveImage:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
  }
];

const TabOptions = ({ activeTab, setActiveTab }) => {
  const renderTabs = tabs.map((tab) => {
    return (
      <div
        key={tab.id}
        onClick={() => setActiveTab(tab.name)}
        className={`tab-item absolute-center cur-po ${
          activeTab === tab.name && "active-tab"
        }`}
      >
        <div
          className="tab-image-container absolute-center"
          style={{
            backgroundColor: `${activeTab === tab.name ? tab.backDrop : ""}`
          }}
        >
          <img
            className="tab-image"
            alt={tab.name}
            src={activeTab === tab.name ? tab.activeImage : tab.inactiveImage}
          />
        </div>
        <div className="tab-name">{tab.name}</div>
      </div>
    );
  });

  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">{renderTabs}</div>
    </div>
  );
};

export default TabOptions;
