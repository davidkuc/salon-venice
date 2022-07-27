import css from "./Gallery.module.css";

import { Face1, Nails1, Nails2, Nails3 } from "../providers/images";

function Gallery() {
  return (
    <section className={css.section}>
      <div className={css.title}>Galeria</div>
      <div className={css["line-break-horizontal"]}></div>
      <ul className={css.list}>
        <li className={css.face1}>
          <Face1 />
        </li>
        <li className={css.nails1}>
          <Nails1 />
        </li>
        <li className={css.nails2}>
          <Nails2 />
        </li>
        <li className={css.nails3}>
          <Nails3 />
        </li>
      </ul>
    </section>
  );
}

export default Gallery;
