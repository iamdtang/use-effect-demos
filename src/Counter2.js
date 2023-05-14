import { useState, useEffect } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);

  // Runs when the component mounts and updates after every render
  // If we remove useEffect, #count-text won't be available and
  // an error will be thrown. The function passed to useEffect is
  // called an "effect", that is, some operation with a side effect.
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(document.getElementById("count-text").innerHTML);
  }); // Try adding an empty dependency array here

  return (
    <div>
      <div id="count-text" className="mb-5">
        Count: {count}
      </div>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
