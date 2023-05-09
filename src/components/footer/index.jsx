import React from "react";
import "./footer.css";
import { FiGlobe } from "react-icons/fi";
import {
  aboutZomato,
  forEnterprise,
  forRestaurants,
  learnMore,
  socialLinks,
  zomaverse
} from "./footerData";
import { AiOutlineCaretDown } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="main-row">
        <div className="main-row-zomato-logo">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="Zomato-Logo"
            className="header-logo cur-po"
          />
        </div>
        <div className="main-row-right absolute-center">
          <div className="main-row-country absolute-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAdVBMVEX/mTMSiAf/////lin/u4N7rnoAhQAAAHb5+fzt7fX19fkAAIIAAHyUlL7i4u6Hh7cAAIdlZabX1+exsdGXl8Tc3OrPz+Orq8yRkb/IyN02NpRcXKKMjLi/v9qOjr+hocRRUZ2AgLMLC4kbG4g+PpRvb6tLS5yC6aPSAAABUklEQVRoge2WbW+EIAyAXfcCVMATVOTUoed5//8njlz2dYlZaLYPfdJE/PKkAdpSVQzDMAzDMAzzF7wSUr0RUgEh/0aO/TD0SCFHv+61EPW++tP+s/Kwi/vYxtiOd7GHonI56SNZBSqHTYeeZDk5XutJIThprXSAaqqvp7bmlPxRRwkLOOty5IWM9aOU3OgWBlCL8s75/Mk/rTZl5EpvCDJAsvMwzDZBkICbVkXkRiwqIhrbfKb02ViDGNUiTqR+Qn5bVU7c981oxhxN7wOCWm8l5Fb7fJDoNmO6jDGbw95Zr20B+aKbXPhhHufuuFyOLi9CbgKNXgrIvbAqpx7T2F0ynUkx30hlhSeQjyXlpNtCeqCkV5G2iEjLn7RxfbfcSNNyaYfFc8x1RGMOSAc00D4tnn6yR9FvoJW/E1J9EFK9EMJylrOc5SxnOctZznKW/8QXesNF4ZJCeSYAAAAASUVORK5CYII="
              alt="Flag"
              className="flag-image"
            />
            <h4>India</h4>
            <AiOutlineCaretDown size={12} className="cur-po" />
          </div>
          <div className="main-row-language absolute-center">
            <FiGlobe />
            <h4>English</h4>
            <AiOutlineCaretDown className="cur-po" size={12} />
          </div>
        </div>
      </div>
      <div className="sub-row max-width">
        <div className="sub-row-title">
          <div className="aboutZomato">
            <h4>ABOUT ZOMATO</h4>
            {aboutZomato.map((item) => {
              return <li className="list-item cur-po">{item}</li>;
            })}
          </div>
          <div className="zomaverse">
            <h4>ZOMAVERSE</h4>
            {zomaverse.map((item) => {
              return <li className="list-item cur-po">{item}</li>;
            })}
          </div>
          <div className="forRestaurants">
            <div className="for-row-one">
              <h4>FOR RESTAURANTS</h4>
              {forRestaurants.map((item) => {
                return <li className="list-item cur-po">{item}</li>;
              })}
            </div>
            <div className="for-row-two">
              <h4>FOR ENTERPRISES</h4>
              {forEnterprise.map((item) => {
                return <li className="list-item cur-po">{item}</li>;
              })}
            </div>
          </div>
          <div className="learnMore">
            <h4>LEARN MORE</h4>
            {learnMore.map((item) => {
              return <li className="list-item cur-po">{item}</li>;
            })}
          </div>
          <div className="socailLinks">
            <h4>SOCIAL LINKS</h4>
            <div className="social-icons">
              {socialLinks.map((item) => {
                return (
                  <div key={item.link}>
                    <a
                      href={item.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.icon}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="social-store">
              <img
                className="social-appstore"
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="App Store"
              />
              <img
                className="social-googlestore"
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="google Store"
              />
            </div>
          </div>
        </div>
        <div className="terms-conditions-main">
          <div className="separator-line">
            <h4 className="terms-condition-text">
              @2023 Krathish K. All rights are reserved. Zomato Clone is the
              clone website from the Zomato website. This website does not
              indulge in any knid of privacy to other website or organizations.
              "Website built purley for Educational purposes".
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
