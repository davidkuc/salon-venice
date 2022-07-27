import css from "./Gallery.module.css";

import { Face1, Nails1, Nails2, Nails3 } from "../providers/images";
import ImageSlider from "../UI/ImageSlider/ImageSlider";

function Gallery() {
  return (
    <section className={css.section}>
      <div className={css.title}>Galeria</div>
      <div className={css["line-break-horizontal"]}></div>
      <ul className={css.list}>
        <li key={"img1"} className={css.face1}>
          <Face1 />
        </li>
        <li key={"img2"} className={css.nails1}>
          <Nails1 />
        </li>
        <li key={"img3"} className={css.nails2}>
          <Nails2 />
        </li>
        <li key={"img4"} className={css.nails3}>
          <Nails3 />
        </li>
      </ul>
      <ImageSlider/>
    </section>
  );
}

export default Gallery;
