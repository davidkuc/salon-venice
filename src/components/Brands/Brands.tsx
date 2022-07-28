import css from "./Brands.module.css";

import { GetImage } from "../providers/images";
import MediaQuery from "react-responsive";

function Brands() {
  return (
    <section className={css.section}>
      <div className={css.title}>Topowe marki</div>
      <div className={css["line-break-horizontal"]}></div>
      <MediaQuery maxWidth={600}>
        <ul className={css.list}>
          <li className={css.souvre}>{GetImage("souvre-logo.png")}</li>
          <div className={css["line-break-horizontal-black"]}></div>
          <li className={css["organic-series"]}>
            {GetImage("organic-series-logo.png")}
          </li>
          <div className={css["line-break-horizontal-black"]}></div>
          <li className={css.mac}>{GetImage("MAC-logo.png")}</li>
          <div className={css["line-break-horizontal-black"]}></div>
          <li className={`${css["last-child"]} ${css["folaroni"]}`}>
            {GetImage("folaroni-logo.png")}
          </li>
        </ul>
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <ul className={css.list}>
          <li className={css.souvre}>{GetImage("souvre-logo.png")}</li>
          <li className={css["organic-series"]}>
            {GetImage("organic-series-logo.png")}
          </li>
          <li className={css.mac}>{GetImage("MAC-logo.png")}</li>
          <li className={`${css["last-child"]} ${css["folaroni"]}`}>
            {GetImage("folaroni-logo.png")}
          </li>
        </ul>
      </MediaQuery>
    </section>
  );
}

export default Brands;
