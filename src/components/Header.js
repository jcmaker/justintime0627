import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <span className="header__top-date">Dec, 28, Mon</span>
        <h2 className="header__top-title">JustinTime</h2>
        <span className="header__top-sub">Today's Paper</span>
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
