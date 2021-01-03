import React, { useEffect, useState } from "react";
import TimePost from "../components/TimePost";
import db from "../fbManager";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

const Times = () => {
  const [times, setTimes] = useState([]);
  const [loadTimes, setLoadTimes] = useState(5);

  useEffect(() => {
    db.collection("times")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const timesArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setTimes(timesArray);
      });
  }, []);

  const LoadMoreTimes = () => {
    setLoadTimes((prevValue) => prevValue + 3);
  };
  return (
    <>
      <div className="times">
        {times.slice(0, loadTimes).map((time) => (
          <TimePost
            key={time.id}
            title={time.data.title}
            content={time.data.content}
            imageSrc={time.data.mainImageUrl}
            creator={time.creatorId}
            timestamp={time.data.timestamp}
          />
        ))}
      </div>
      <div className="load-more">
        <Button onClick={LoadMoreTimes}>
          <AddIcon /> Load More
        </Button>
      </div>
    </>
  );
};

export default Times;
