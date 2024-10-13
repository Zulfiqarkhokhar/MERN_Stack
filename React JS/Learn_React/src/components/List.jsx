import React from "react";

const List = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      {arr.map((n) => {
        return (
          <ul key={n}>
            <li>{n}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default List;
