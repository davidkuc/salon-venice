import React from "react";

import css from "./PriceList.module.css";

import { Service } from "../../providers/types";
import ServiceElement from "./ServiceElement";

type Props = {
  number: string;
  title: string;
  services: Service[];
  darkerBackground?: boolean;
};

/**
 *
 * @param services Array of Services objects
 * @returns
 */
function PriceList({ number, title, services, darkerBackground = false }: Props) {

  const generateRandomKey = (index: number) => {
return `${index}-${Math.random()}`;
  }
  
  const mapToServiceElementsMobile = (collection: Service[]) => {
    const length = collection.length;
    let serviceElements = [];

    for (let i = 0; i < length; i++) {
      serviceElements.push(
        <ServiceElement key={generateRandomKey(i)} name={collection[i].name} price={`${collection[i].price}`} />
      );

      if (i === 0 || i % 2 === 0) {
        serviceElements.push(
          <div key={generateRandomKey(i)} className={css["line-break-vertical-black"]}></div>
        );
      }
    }

    return serviceElements;
  };

  return (
    <section className={`${css["price-list"]} ${darkerBackground && css["price-list-darkerBackground"]}`}>
      <div className={css.container}>
        <div className={css.number}>{`.0${number}`}</div>
        <div className={css["line-break"]}></div>
        <div className={css.title}>{title}</div>
      </div>
      <ul className={css.services}>
      {mapToServiceElementsMobile(services)}
      </ul>
    </section>
  );
}

export default PriceList;
