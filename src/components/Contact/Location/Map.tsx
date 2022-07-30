import { useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import css from "./Map.module.css";

type Props = {
  className: string;
};

function Map({ className }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3O00rP6Vu3tfid2C5FljbWYTniPIP4l8",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={className}>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName={css.map}
      ></GoogleMap>
    </div>
  );
}

export default Map;
