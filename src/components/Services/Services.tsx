import css from "./Services.module.css";

import Button from "../UI/Button/Button";
import ServiceIcon from "./ServiceIcon";

function Services() {
  return (
    <section className={css.section}>
      <div className={css.title}>Usługi</div>
      <div className={css["line-break-horizontal"]}></div>
      <article className={css.article}>
        <ServiceIcon icon={"spa"}>Makijaż</ServiceIcon>
        <div className={css["line-break-vertical"]}></div>
        <ServiceIcon icon={"mortar-pestle"}>Pielęgnacja skóry</ServiceIcon>
        <div className={css["line-break-vertical"]}></div>
        <ServiceIcon icon={"spray-can-sparkles"}>
          {"Pedicure & Manicure"}
        </ServiceIcon>
      </article>
      <Button path={"dummy"}>Cennik</Button>
    </section>
  );
}

export default Services;
