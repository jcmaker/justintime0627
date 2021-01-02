import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

function Comments() {
  return (
    <div className="comment">
      <div className="comment__left">
        <Avatar />
        <div className="comment__left-info">
          <h4>
            Justin Cho
            <span className="comment__left-info--timestamp">
              Sun, 02 Jan 2021
            </span>
          </h4>
          <p>this is a comment</p>
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
