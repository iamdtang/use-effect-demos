import { useState, useEffect } from "react";

export default function Coordinates() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Coordinates found");
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }, []);

  return (
    <div>
      {latitude}, {longitude}
    </div>
  );
}
