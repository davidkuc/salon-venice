import css from "./Gallery.module.css";

import { useState } from "react";

import { Face1, Nails1, Nails2, Nails3 } from "../providers/images";
import ImageSlider from "../UI/ImageSlider/ImageSlider";

function Gallery() {
  const [imageOpen, setImageOpen] = useState(true);

  const exitClickHandler = () => {
    setImageOpen(false);
  };

  const openImageHandler = () => {
    setImageOpen(true);
  };

  return (
    <section className={css.section}>
      <div className={css.title}>Galeria</div>
      <div className={css["line-break-horizontal"]}></div>
      <ul className={css.list}>
        <li onClick={openImageHandler} className={css.face1}>
          <Face1 />
        </li>
        <li onClick={openImageHandler} className={css.nails1}>
          <Nails1 />
        </li>
        <li onClick={openImageHandler} className={css.nails2}>
          <Nails2 />
        </li>
        <li onClick={openImageHandler} className={css.nails3}>
          <Nails3 />
        </li>
      </ul>
      {imageOpen && <ImageSlider onExitClick={exitClickHandler} />}
    </section>
  );
}

export default Gallery;
