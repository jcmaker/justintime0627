import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { selectOpenTime } from "../features/timeSlice";
import MessageIcon from "@material-ui/icons/Message";

function OpenTime() {
  const history = useHistory();
  const selectedTime = useSelector(selectOpenTime);
  const closeTime = () => {
    history.push("/");
  };
  console.log(selectedTime?.title);
  return (
    <div className="opentime">
      <div className="opentime__top">
        <IconButton onClick={closeTime}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="opentime__middle">
        <div className="timepost__top">
          <span className="timepost__title">{selectedTime?.title}</span>
          <span className="timepost__info">Justin Cho</span>
          <span className="timepost__info">
            {new Date(selectedTime?.timestamp?.toDate()).toUTCString()}
          </span>
        </div>
        <div className="timepost__middle">
          <img className="timepost__img" src={selectedTime?.imageSrc} alt="" />
          <pre className="timepost__content">{selectedTime?.content}</pre>
        </div>
        <div className="timepost__bottom">
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
        </div>
      </div>
      <div className="opentime__bottom">
        <div className="opentime__bottom-input">
          <form>
            <input type="text" placeholder="Write a comment..." required />
            <button type="submit">Send</button>
          </form>
        </div>
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
}

export default OpenTime;
