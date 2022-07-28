import React from "react";

import css from "./TitleBar.module.css";

type Props = {
  children?: string;
};

function TitleBar({ children }: Props) {
  return (
    <section className={css["title-bar"]}>
      <div className={css.text}>{children}</div>
    </section>
  );
}

export default TitleBar;
