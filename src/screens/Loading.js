import React from "react";

function Loading() {
  return (
    // <div className="loading">
    //   <span>Loading . . .</span>
    // </div>
    <div className="loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span>Loading . . .</span>
    </div>
  );
}

export default Loading;
