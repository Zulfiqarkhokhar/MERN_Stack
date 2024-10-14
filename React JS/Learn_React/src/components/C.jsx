import { useContext, useState } from "react";
import { UserContext } from "./Context";

const C = () => {
  const { user, updateName } = useContext(UserContext);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      updateName(name);
      setName("");
    }
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Change Name</button>
      </form>
    </div>
  );
};

export default C;
