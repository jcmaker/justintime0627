import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

function Comments({ timestamp, comments, userName, userPhoto }) {
  return (
    <div className="comment">
      <div className="comment__left">
        <Avatar src={userPhoto} />
        <div className="comment__left-info">
          <h4>
            {userName}
            <span className="comment__left-info--timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </h4>
          <p>{comments}</p>
        </div>
      </div>

      <div className="comment__right">
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <CreateIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Comments;
