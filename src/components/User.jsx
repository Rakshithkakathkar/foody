import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h4>{count}</h4>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase count
      </button>
    </div>
  );
};

export default User;
