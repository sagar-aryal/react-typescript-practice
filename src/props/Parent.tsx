import React from "react";

import { Child } from "./Child";

const Parent = () => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <Child name="Joe" age={30} isMale={true} handleClick={handleClick} />
    </div>
  );
};

export default Parent;
