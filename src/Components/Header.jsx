import React from "react";
import "./Header.css";
import Search from "./Search";
import { BsFillHeartFill, BsBag } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-parent-container">
      <div className="header-child-container-one">
        <ul className="header-childlist">
          <li>
            <a>Offer</a>
          </li>
          <li>
            <a>Fanbook</a>
          </li>
          <li>
            <a>Download App</a>
          </li>
          <li>
            <a>Tribe Membership</a>
          </li>
        </ul>
        <ul className="header-childlist">
          <li>
            <a>Contact us</a>
          </li>
          <li>
            <a>Track Order</a>
          </li>
        </ul>
      </div>
      <div className="header-child-container-two">
        <div className="header-two-left">
          <h1 className="logo">Bewakoof</h1>
          <ul className="header-list-category">
            <li>Men</li>
            <li>Women</li>
            <li>Mobile Covers</li>
          </ul>
        </div>
        <div className="header-two-right">
          <Search />
          <ul className="user-info">
            <li>Login</li>
            <li>
              <BsFillHeartFill />
            </li>
            <li>
              <BsBag />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
