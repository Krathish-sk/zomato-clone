import React from "react";
import "./header.css";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
        alt="Zomato-Logo"
        className="header-logo cur-po"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <CiLocationOn
                className="absolute-center location-icon"
                color="#ff7e8b"
              />
              <div className="location-name">Karkala</div>
            </div>
            <FaCaretDown className="absolute-center cur-po" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <CiSearch className="absolute-center search-icon" color="#828282" />
            <input
              placeholder="Search restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <CgProfile className="header-profile-image cur-po" />
          <span className="header-username">Guest</span>
          <AiOutlineArrowDown
            className="profile-options-icon cur-po"
            color=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
