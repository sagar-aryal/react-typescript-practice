import React from "react";

// defining type for child props
interface ChildProps {
  name: string;
  age: number;
  isMale: boolean;
  handleClick: () => void;
}

// telling that this is react functional component and will receive child props
export const Child: React.FC<ChildProps> = ({
  name,
  age,
  isMale,
  handleClick,
}) => {
  return (
    <div>
      {isMale ? (
        <p>
          {name}, age of {age} is male.
        </p>
      ) : (
        <p>No male fould</p>
      )}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
