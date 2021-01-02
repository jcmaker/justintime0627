import React from "react";
import TimePost from "./TimePost";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Comments from "./Comments";

function OpenTime() {
  const history = useHistory();
  const closeTime = () => {
    history.push("/");
  };

  return (
    <div className="opentime">
      <div className="opentime__top">
        <IconButton onClick={closeTime}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="opentime__middle">
        <TimePost id="1" src="../img/justintimes_logo.png" />
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
