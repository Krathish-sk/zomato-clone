import React, { useState } from "react";
import Delivery from "../../components/delivery/index";
import DiningOut from "../../components/diningOut/index";
import NightLife from "../../components/nightLife/index";
import Header from "../../components/header/index";
import TabOptions from "../../components/tabOptions/index";
import Footer from "../../components/footer/index";

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "NightLife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default HomePage;
