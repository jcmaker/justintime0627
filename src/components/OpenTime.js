import React, { useState, useEffect } from "react";
import firebase from "firebase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Comments from "./Comments";
import { useSelector } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { selectOpenTime } from "../features/timeSlice";
import MessageIcon from "@material-ui/icons/Message";
import db from "../fbManager";
import { selectUser } from "../features/userSlice";

function OpenTime() {
  const [getComments, setGetComments] = useState([]);
  const [sendComments, setSendComments] = useState("");

  const history = useHistory();
  const selectedTime = useSelector(selectOpenTime);
  const user = useSelector(selectUser);
  const closeTime = () => {
    history.push("/");
  };

  useEffect(() => {
    db.collection("times")
      .doc(selectedTime?.timeId)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const commentsArray = snapshot.docs.map((doc) => doc.data());
        setGetComments(commentsArray);
      });
  }, [selectedTime?.timeId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("times")
      .doc(selectedTime?.timeId)
      .collection("comments")
      .add({
        userId: user.uid,
        userName: user.displayName,
        userPhoto: user.photo,
        text: sendComments,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setSendComments("");
  };

  console.log(sendComments);
  return (
    <div className="opentime">
      <div className="opentime__top">
        <IconButton onClick={closeTime}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="opentime__middle">
        <div className="timepost__top">
          <span className="timepost__title-opened">{selectedTime?.title}</span>
          <span className="timepost__info">Justin Cho</span>
          <span className="timepost__info">
            {new Date(selectedTime?.timestamp?.toDate()).toUTCString()}
          </span>
        </div>
        <div className="opentime__timepost-middle">
          <img className="timepost__img" src={selectedTime?.imageSrc} alt="" />
          <p className=" opentime__post">{selectedTime?.content}</p>
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
            <input
              type="text"
              placeholder="Write a comment..."
              required
              onChange={(e) => setSendComments(e.target.value)}
              value={sendComments}
            />
            <button type="submit" onClick={postComment}>
              Send
            </button>
          </form>
        </div>
        <div className="opentime__comments">
          {getComments.map((data) => (
            <Comments
              timestamp={data.timestamp}
              comments={data.text}
              userName={data.userName}
              userPhoto={data.userPhoto}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenTime;
