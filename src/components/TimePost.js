import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import MessageIcon from "@material-ui/icons/Message";

const TimePost = ({ src }) => {
  return (
    <>
      <div className="timepost">
        <div className="timepost__top">
          <span className="timepost__title">
            Lorem Ipum, Lorem Ipsum is not simply random text.its a Test!!
          </span>
          <span className="timepost__info">Justin Cho</span>
          <span className="timepost__info">18:37 pm</span>
        </div>
        <div className="timepost__middle">
          <img className="timepost__img" src={src} alt="" />
          <p className="timepost__content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
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
    </>
  );
};

export default TimePost;
