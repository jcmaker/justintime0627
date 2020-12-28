import React from "react";
import TimePost from "../components/TimePost";

const Times = () => {
  return (
    <div className="times">
      <TimePost src="../img/justintimes_logo.png" />
      <TimePost />
      <TimePost />
      <TimePost src="https://static01.nyt.com/images/2020/12/27/multimedia/00niekro1/00niekro1-superJumbo.jpg?quality=90&auto=webp" />
    </div>
  );
};

export default Times;
