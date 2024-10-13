import React from "react";
import { useState } from "react";

const StateComponent = () => {
  const [friends, setFriends] = useState(["Yasir", "Ameer", "Talabdar"]);

  const handleClick = () => {
    setFriends([...friends, "Zubair"]);
  };

  return (
    <div>
      {friends.map((friend) => {
        return (
          <ul key={Math.random()}>
            <li>{friend}</li>
          </ul>
        );
      })}
      <button onClick={handleClick}>Add Friend</button>
    </div>
  );
};

export default StateComponent;
