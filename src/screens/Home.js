import React from "react";
import Times from "./Times";
import SmsIcon from "@material-ui/icons/Sms";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home">
      <Times />
      {/* if justin conor button */}
      <div className="goto">
        <IconButton
          onClick={() => {
            history.push("/postTime");
          }}
        >
          <SmsIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
