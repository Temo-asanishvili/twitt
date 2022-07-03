import React from "react";
import useLocalState from "../hooks/useLocalStorage";

export default function Likes() {
  const [count, setCount] = useLocalState(120, "Like", 1000);

  const Like = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={Like}>Like {count}</button>
    </div>
  );
}
