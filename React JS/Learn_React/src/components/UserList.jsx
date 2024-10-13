import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Bob", age: 23 },
    { id: 2, name: "Alice", age: 34 },
    { id: 3, name: "Charlie", age: 50 },
  ];

  return (
    <div>
      {users.map(({ id, name, age }) => {
        return (
          <ul key={id}>
            <li>Name : {name}</li>
            <li>Age : {age}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default UserList;
