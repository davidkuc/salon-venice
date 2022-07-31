import { ReactNode } from "react";

import Image from "next/image";



import css from "./Map.module.css";

type Props = {
  className: string;
  children: ReactNode;
};

function Map({ className, children }: Props) {


  return (
    <div className={className}>
      <Image
        src={`https://maps.googleapis.com/maps/api/staticmap?center=49.99297599263852,20.04247030712375&zoom=18&size=1600x1600&markers=color:red%7Clabel:C%7C49.99297599263852,20.04247030712375&key=AIzaSyC3O00rP6Vu3tfid2C5FljbWYTniPIP4l8`}
        alt="me"
        layout="fill"
        className={css.image}
      />
      {children}
    </div>
  );
}

export default Map;
