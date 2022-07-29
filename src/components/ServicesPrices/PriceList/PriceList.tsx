import React from "react";
import MediaQuery from "react-responsive";

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
function PriceList({
  number,
  title,
  services,
  darkerBackground = false,
}: Props) {
  const generateRandomKey = (index: number) => {
    return `${index}-${Math.random()}`;
  };

  const mapToServiceElements_min700 = (collection: Service[]) => {
    const length = collection.length;
    let serviceElements = [];

    for (let i = 1; i <= length; i++) {
      serviceElements.push(
        <ServiceElement
          key={generateRandomKey(i - 1)}
          name={collection[i - 1].name}
          price={`${collection[i - 1].price}`}
        />
      );

      if (!(i % 3 === 0)) {
        serviceElements.push(
          <div
            key={generateRandomKey(i)}
            className={css["line-break-vertical-black"]}
          ></div>
        );
      }
    }

    return serviceElements;
  };

  const mapToServiceElements_600_700 = (collection: Service[]) => {
    const length = collection.length;
    let serviceElements = [];

    for (let i = 1; i <= length; i++) {
      serviceElements.push(
        <ServiceElement
          key={generateRandomKey(i - 1)}
          name={collection[i - 1].name}
          price={`${collection[i - 1].price}`}
        />
      );

      if (!(i % 2 === 0)) {
        serviceElements.push(
          <div
            key={generateRandomKey(i)}
            className={css["line-break-vertical-black"]}
          ></div>
        );
      }
    }

    return serviceElements;
  };

  const mapToServiceElementsMobile_max480 = (collection: Service[]) => {
    const length = collection.length;
    let serviceElements = [];

    for (let i = 0; i < length; i++) {
      serviceElements.push(
        <ServiceElement
          key={generateRandomKey(i)}
          name={collection[i].name}
          price={`${collection[i].price}`}
        />
      );

      if (i !== length - 1) {
        serviceElements.push(
          <div
            key={generateRandomKey(i)}
            className={css["line-break-horizontal-black"]}
          ></div>
        );
      }
    }

    return serviceElements;
  };

  const mapToServiceElementsMobile_480_600 = (collection: Service[]) => {
    const length = collection.length;
    let serviceElements = [];

    for (let i = 0; i < length; i++) {
      serviceElements.push(
        <ServiceElement
          key={generateRandomKey(i)}
          name={collection[i].name}
          price={`${collection[i].price}`}
        />
      );

      if (i === 0 || i % 2 === 0) {
        serviceElements.push(
          <div
            key={generateRandomKey(i)}
            className={css["line-break-vertical-black"]}
          ></div>
        );
      }
    }

    return serviceElements;
  };

  return (
    <section
      className={`${css["price-list"]} ${
        darkerBackground && css["price-list-darkerBackground"]
      }`}
    >
      <div className={css.container}>
        <div className={css.number}>{`.0${number}`}</div>
        <div className={css["line-break"]}></div>
        <div className={css.title}>{title}</div>
      </div>
      <ul className={css.services}>
        <MediaQuery maxWidth={480}>
          {mapToServiceElementsMobile_max480(services)}
        </MediaQuery>
         <MediaQuery minWidth={480} maxWidth={600}>
          {mapToServiceElementsMobile_480_600(services)}
        </MediaQuery>
        <MediaQuery minWidth={600} maxWidth={700}>{mapToServiceElements_600_700(services)}</MediaQuery>
        <MediaQuery minWidth={700}>{mapToServiceElements_min700(services)}</MediaQuery>

      </ul>
    </section>
  );
}

export default PriceList;
