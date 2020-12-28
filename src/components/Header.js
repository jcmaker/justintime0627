import React from "react";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top-left">
          <span className="header__top-date">Dec, 28, Mon</span>
          <span className="header__top-sub">Today's Paper</span>
        </div>
        <h2 className="header__top-title">JustinTime</h2>
        <Avatar />
      </div>
      <div className="header__bottom">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Project</span>
      </div>
    </div>
  );
};

export default Header;
