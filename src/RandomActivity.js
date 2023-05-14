import { useState, useEffect } from "react";

export default function RandomActivity() {
  const [activity, setActivity] = useState();

  // If we remove the dependency array, we'll see
  // an infinite loop because setActivity is getting
  // called with a new activity causing the component
  // to render again. In the next exercise, we'll see
  // a similar example but no infinite loop.
  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setActivity(data.activity);
      });
  }, []);

  return <div>{activity}</div>;
}
