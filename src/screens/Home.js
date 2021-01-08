import React from "react";
import Times from "./Times";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import JustinUID from "../JustinUid";
import CreateIcon from "@material-ui/icons/Create";

const Home = () => {
  const history = useHistory();
  const user = useSelector(selectUser);
  const onlyJustin = JustinUID;

  return (
    <div className="home">
      <Times />
      {/* if justin conor button */}
      <div className="goto">
        <IconButton
          onClick={() => {
            user
              ? user.uid === onlyJustin
                ? history.push("/postTime")
                : alert("Im Sorry :( Only Justin could go in")
              : alert("you should login :)");

            // user.uid === onlyJustin
            //   ? history.push("/postTime")
            //   : alert("Im Sorry :( Only Justin could go in");
          }}
        >
          <CreateIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
