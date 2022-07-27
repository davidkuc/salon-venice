import css from "./Brands.module.css";

import { GetImage } from "../providers/images";

function Brands() {
  return (
    <section className={css.section}>
      <div className={css.title}>Topowe marki</div>
      <div className={css["line-break-horizontal"]}></div>
      <ul className={css.list}>
        <li className={css.souvre}>
          {GetImage("souvre-logo.png")}
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li className={css["organic-series"]}>
        {GetImage("organic-series-logo.png")}
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li className={css.mac}>
        {GetImage("MAC-logo.png")}
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li className={`${css["last-child"]} ${css["folaroni"]}`}>
        {GetImage("folaroni-logo.png")}
        </li>
      </ul>
    </section>
  );
}

export default Brands;
