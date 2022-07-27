import css from "./ImageSlider.module.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Backdrop from "../Backdrop/Backdrop";
import NavArrow from "./NavArrow";
import { ImageObj } from "../../providers/types";
import { GetImage } from "../../providers/images";

type Props = {
  onExitClick: Function;
  images: ImageObj[];
  initialImageId: number;
};

function ImageSlider(props: Props) {
  const [currId, setCurrId] = useState(props.initialImageId);

  const images = [...props.images];
  const lastId = images.length - 1;

  const navArrowHandler = (direction: string) => {
    switch (direction) {
      case "left":
        if (currId === 0) {
          setCurrId(lastId);
        } else {
          setCurrId((state) => state - 1);
        }
        break;
      case "right":
        if (currId === lastId) {
          setCurrId(0);
        } else {
          setCurrId((state) => state + 1);
        }
        break;
    }
  };

  const exitClickHandler = () => {
    props.onExitClick();
  };

  return (
    <section className={css.section}>
      <Backdrop />
      <div className={css["img-container"]}>
        {GetImage(images[currId].imageName)}
      </div>
      <div onClick={exitClickHandler} className={css["xmark-container"]}>
        <FontAwesomeIcon icon={"xmark"} inverse size="5x" />
      </div>
      <div className={css["arrows-container"]}>
        <NavArrow onClick={navArrowHandler} direction={"left"} />
        <NavArrow onClick={navArrowHandler} direction={"right"} />
      </div>
    </section>
  );
}

export default ImageSlider;
