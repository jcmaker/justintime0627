import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { auth } from "../fbManager";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { useHistory } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  const history = useHistory();

  const date = new Date();

  const datedate = date.getDate();
  const year = date.getFullYear();

  const textMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const textDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = textMonth[date.getMonth()];
  const day = textDay[date.getDay()];
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top-left">
          <span className="header__top-date">{`${day}, ${month} ${datedate}, ${year}`}</span>
          <span className="header__top-sub">Today's Paper</span>
        </div>
        <h2
          className="header__top-title"
          onClick={() => {
            history.push("/");
          }}
        >
          JustinTime
        </h2>
        <div className="header__top-info">
          <Avatar src={user.photo} /> <span>|</span>
          <Button
            onClick={() => {
              auth.signOut();
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="header__bottom">
        <span
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </span>
        <span>About</span>
        <span>Contact</span>
        <span>Project</span>
      </div>
    </div>
  );
};

export default Header;
