import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import firebase from "firebase";
import db, { storageService } from "../fbManager";

function PostTime() {
  const [mainContent, setMainContent] = useState("");
  const [mainTitle, setMainTitle] = useState("");
  const [mainImage, setMainImage] = useState("");

  const user = useSelector(selectUser);

  const postTime = async (e) => {
    e.preventDefault();
    let mainImageUrl = "";
    if (mainImage !== "") {
      const mainImageRef = storageService
        .ref()
        .child(`${user.uid}/${uuidv4()}`);
      const response = await mainImageRef.putString(mainImage, "data_url");
      mainImageUrl = await response.ref.getDownloadURL();
    }
    // const timeObj = {
    //   content: mainContent,
    //   title: mainTitle,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   creatorId: user.uid,
    //   mainImageUrl,
    // };
    await db.collection("times").add({
      content: mainContent,
      title: mainTitle,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      creatorId: user.uid,
      mainImageUrl,
    });
    setMainContent("");
    setMainTitle("");
    setMainImage("");
    window.location.reload();
  };
  const onChangeContent = (event) => {
    const {
      target: { value },
    } = event;
    setMainContent(value);
  };
  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setMainTitle(value);
  };
  const onChangeImage = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setMainImage(result);
    };
    reader.readAsDataURL(theFile);
  };

  return (
    <div className="post">
      <form className="post__form">
        <input
          type="text"
          placeholder="Title"
          className="post__form-title"
          value={mainTitle}
          onChange={onChangeTitle}
        />
        <textarea
          type="text"
          value={mainContent}
          placeholder="Write Time"
          className="post__form-main"
          maxLength={1200}
          onChange={onChangeContent}
        />
        {/* <span className="counter">{TimePost.length}</span> */}
        <input
          type="file"
          accept="image/*"
          className="post__form-file"
          onChange={onChangeImage}
        />
        <input
          type="submit"
          value="Post Time"
          className="post__form-btn"
          onClick={postTime}
        />
      </form>
    </div>
  );
}

export default PostTime;
