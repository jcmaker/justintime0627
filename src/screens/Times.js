import React, { useEffect, useState } from "react";
import TimePost from "../components/TimePost";
import db from "../fbManager";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Times = () => {
  const [times, setTimes] = useState([]);
  const [loadTimes, setLoadTimes] = useState(5);
  const user = useSelector(selectUser);

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
        {times.slice(0, loadTimes).map(({ data, id }) => (
          <TimePost
            key={id}
            timeId={id}
            title={data.title}
            content={data.content}
            imageSrc={data.mainImageUrl}
            user={user}
            creator={data.creatorId}
            timestamp={data.timestamp}
          />
        ))}
      </div>
      {console.log(times)}
      <div className="load-more">
        <Button onClick={LoadMoreTimes}>
          <AddIcon /> Load More
        </Button>
      </div>
    </>
  );
};

export default Times;
