import React from "react";
import TimePost from "../components/TimePost";

function PostTime() {
  return (
    <div className="post">
      <form className="post__form">
        <input type="text" placeholder="Title" className="post__form-title" />
        <textarea
          type="text"
          placeholder="Write Time"
          className="post__form-main"
          maxLength={1200}
        />
        {/* <span className="counter">{TimePost.length}</span> */}
        <input type="file" accept="image/*" className="post__form-file" />
        <input type="submit" value="Post Time" className="post__form-btn" />
      </form>
    </div>
  );
}

export default PostTime;
