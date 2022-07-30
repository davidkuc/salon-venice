import { useRef, useState, useEffect, ReactNode } from "react";
import {
  LoadScript,
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";


import css from "./Map.module.css";

type Props = {
  className: string;
  children: ReactNode;
};

function Map({ className, children }: Props) {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyC3O00rP6Vu3tfid2C5FljbWYTniPIP4l8",
  // });

  // let markerEl;

  // if (!isLoaded) return <div>Loading...</div>;


  return (
    <div className={className}>
      <LoadScript googleMapsApiKey="AIzaSyC3O00rP6Vu3tfid2C5FljbWYTniPIP4l8">
        <GoogleMap
          zoom={18}
          center={{ lat: 49.99297599263852, lng: 20.04247030712375 }}
          mapContainerClassName={css.map}
        >
          <Marker
            position={{ lng: 49.99297599263852, lat: 20.04247030712375 }}
          />
        </GoogleMap>
      </LoadScript>

      {children}
    </div>
  );
}

export default Map;
