import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <section key={item.id}>
              <li>{item.title}</li>
            </section>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchData;
