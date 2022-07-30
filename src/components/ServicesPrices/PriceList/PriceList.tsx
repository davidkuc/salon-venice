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

enum ScreenSize {
  max480,
  between480_600,
  beetween600_700,
  min700,
}

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

  const mapToServiceElements = (
    collection: Service[],
    screenSize: ScreenSize
  ) => {
    const length = collection.length;
    let serviceElements: any[] = [];

    let pushLineBreakFunc;

    switch (screenSize) {
      case ScreenSize.max480:
        pushLineBreakFunc = pushHorizontalLineBreak_max480.bind(null, length);
        break;
      case ScreenSize.between480_600:
        pushLineBreakFunc = pushVerticalLineBreak_480_600;
        break;
      case ScreenSize.beetween600_700:
        pushLineBreakFunc = pushVerticalLineBreak_600_700;
        break;
      case ScreenSize.min700:
        pushLineBreakFunc = pushVerticalLineBreak_min700;
        break;
    }

    for (let i = 1; i <= length; i++) {
      pushServiceElement(serviceElements, i, collection);

      pushLineBreakFunc(i, serviceElements);
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
          {mapToServiceElements(services, ScreenSize.max480)}
        </MediaQuery>
        <MediaQuery minWidth={480} maxWidth={600}>
          {mapToServiceElements(services, ScreenSize.between480_600)}
        </MediaQuery>
        <MediaQuery minWidth={600} maxWidth={700}>
          {mapToServiceElements(services, ScreenSize.beetween600_700)}
        </MediaQuery>
        <MediaQuery minWidth={700}>
          {mapToServiceElements(services, ScreenSize.min700)}
        </MediaQuery>
      </ul>
    </section>
  );

  function pushServiceElement(
    serviceElements: any[],
    i: number,
    collection: Service[]
  ) {
    serviceElements.push(
      <ServiceElement
        key={generateRandomKey(i - 1)}
        name={collection[i - 1].name}
        price={`${collection[i - 1].price}`}
      />
    );
  }

  function pushVerticalLineBreak_480_600(i: number, serviceElements: any[]) {
    if (i === 1 || !(i % 2 === 0)) {
      _pushVerticalLineBreak(serviceElements, i);
    }
  }

  function pushVerticalLineBreak_min700(i: number, serviceElements: any[]) {
    if (!(i % 3 === 0)) {
      _pushVerticalLineBreak(serviceElements, i);
    }
  }

  function pushVerticalLineBreak_600_700(i: number, serviceElements: any[]) {
    if (!(i % 2 === 0)) {
      _pushVerticalLineBreak(serviceElements, i);
    }
  }

  function pushHorizontalLineBreak_max480(
    length: number,
    i: number,
    serviceElements: any[]
  ) {
    if (i !== length) {
      _pushHorizontalLineBreak(serviceElements, i);
    }
  }

  function _pushVerticalLineBreak(serviceElements: any[], i: number) {
    serviceElements.push(
      <div
        key={generateRandomKey(i)}
        className={css["line-break-vertical-black"]}
      ></div>
    );
  }
  function _pushHorizontalLineBreak(serviceElements: any[], i: number) {
    serviceElements.push(
      <div
        key={generateRandomKey(i)}
        className={css["line-break-horizontal-black"]}
      ></div>
    );
  }
}

export default PriceList;
