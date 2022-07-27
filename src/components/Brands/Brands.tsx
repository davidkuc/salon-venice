import css from "./Brands.module.css";

import {
  FolaroniLogo,
  MACLogo,
  OrganicSeriesLogo,
  SouvreLogo,
} from "../providers/images";

function Brands() {
  return (
    <section className={css.section}>
      <div className={css.title}>Topowe marki</div>
      <div className={css["line-break-horizontal"]}></div>
      <ul className={css.list}>
        <li className={css.souvre} >
          <SouvreLogo />
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li className={css["organic-series"]}>
          <OrganicSeriesLogo />
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li className={css.mac}>
          <MACLogo />
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li className={`${css["last-child"]} ${css["folaroni"]}`}>
          <FolaroniLogo />
        </li>
      </ul>
    </section>
  );
}

export default Brands;
