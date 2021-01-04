import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton, Button } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectTime } from "../features/timeSlice";

const TimePost = ({ title, content, imageSrc, timestamp }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const openTime = () => {
    dispatch(
      selectTime({
        title,
        content,
        imageSrc,
        timestamp,
      })
    );
    history.push("/time");
  };
  return (
    <>
      <div className="timepost">
        <div className="timepost__top">
          <span className="timepost__title">{title}</span>
          <span className="timepost__info">Justin Cho</span>
          <span className="timepost__info">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </div>
        <div className="timepost__middle">
          <img className="timepost__img" src={imageSrc} alt="" />
          <p className="timepost__content">{content}</p>
        </div>
        <div className="timepost__bottom">
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <MessageIcon />
          </IconButton>
          <Button onClick={openTime}>
            <ArrowForwardIcon /> more
          </Button>
        </div>
      </div>
    </>
  );
};

export default TimePost;
