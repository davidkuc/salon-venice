import css from "./Services.module.css";

import Button from "../UI/Button/Button";
import ServiceIcon from "./ServiceIcon";

function Services() {
  return (
    <section className={css.section}>
      <div className={css.title}>Usługi</div>
      <div className={css["line-break-horizontal"]}></div>
      <ul className={css.list}>
        <li>
          <ServiceIcon icon="spa">Makijaż</ServiceIcon>
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li>
          <ServiceIcon icon="mortar-pestle">Pielęgnacja skóry</ServiceIcon>
        </li>
        <div className={css["line-break-horizontal-black"]}></div>
        <li className={css["last-child"]}>
          <ServiceIcon icon="spray-can-sparkles">
            {"Pedicure & Manicure"}
          </ServiceIcon>
        </li>
      </ul>
      <Button path={"dummy"}>Cennik</Button>
    </section>
  );
}

export default Services;
