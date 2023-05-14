import { useState } from "react";

export default function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="mb-5">Count: {count}</div>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
