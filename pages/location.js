import { useEffect, useState } from "react";

const Location = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  });
  return (
    <>
      <h1>Your location </h1>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </>
  );
};

export default Location;
