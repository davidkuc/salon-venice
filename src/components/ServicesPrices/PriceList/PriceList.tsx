import React from "react";

import css from "./PriceList.module.css";

import { Service } from "../../providers/types";
import ServiceElement from "./ServiceElement"

type Props = {
  number: string;
  title: string;
  services?: Service[];
};

/**
 *
 * @param services Array of Services objects
 * @returns
 */
function PriceList({ number, title, services }: Props) {
  return (
    <section className={css["price-list"]}>
      <div className={css.container}>
        <div className={css.number}>{`.0${number}`}</div>
        <div className={css["line-break"]}></div>
        <div className={css.title}>{title}</div>
      </div>
      <ul className={css.services}>
       <ServiceElement name="Zabiegi na twarz + maska algowa" price="100 - 150" />
      </ul>
    </section>
  );
}

export default PriceList;
