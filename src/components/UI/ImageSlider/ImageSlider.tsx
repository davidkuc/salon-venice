import css from "./ImageSlider.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Backdrop from "../Backdrop/Backdrop";
import NavArrow from "./NavArrow";

type Props = {
  onBackdropClick: Function;
};

function ImageSlider(props: Props) {
  const navArrowHandler = (direction: string) => {};

  const backdropClickHandler = () => {};

  return (
    <section className={css.section}>
      <Backdrop onClick={backdropClickHandler} />
      <div className={css["img-container"]}></div>
      <div className={css["xmark-container"]}>
        <FontAwesomeIcon icon={"xmark"} inverse size="5x"/>
      </div>
      <div className={css["arrows-container"]}>
        <NavArrow onClick={navArrowHandler} direction={"left"} />
        <NavArrow onClick={navArrowHandler} direction={"right"} />
      </div>
    </section>
  );
}

export default ImageSlider;
