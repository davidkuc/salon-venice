import React from "react";

import css from "./ServiceElement.module.css";

type Props = {
  name: string;
  price: string;
};

/**
 *
 * @param services Array of Services objects
 * @returns
 */
function ServiceElement({ name, price }: Props) {
  return (
    <li className={css.container}>
      <div className={css.price}>{price} zł</div>
      <div className={css.name}>{name}</div>
    </li>
  );
}

export default ServiceElement;
