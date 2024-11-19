import css from "./Services.module.css";

import Button from "../../UI/Button/Button";
import ServiceIcon from "./ServiceIcon";
import MediaQuery from "react-responsive";

function Services() {
  return (
    <section className={css.section}>
      <div className={css.title}>Usługi</div>
      <div className={css["line-break-horizontal"]}></div>
      <MediaQuery maxWidth={600}>
        <ul className={css["list-mobile"]}>
          <li>
            <ServiceIcon icon="spa">Makijaż</ServiceIcon>
          </li>
          <div className={css["line-break-horizontal-black"]}></div>
          <li>
            <ServiceIcon icon="mortar-pestle">Zabiegi pielęgnacyjne</ServiceIcon>
          </li>
          <div className={css["line-break-horizontal-black"]}></div>
          <li>
            <ServiceIcon icon="spray-can-sparkles">
              {"Pedicure & Manicure"}
            </ServiceIcon>
          </li>
          <div className={css["line-break-horizontal-black"]}></div>
          <li className={css["last-child-mobile"]}>
            <ServiceIcon icon="spa">Makijaż permanentny</ServiceIcon>
          </li>
        </ul>
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <ul className={css.list}>
          <li>
            <ServiceIcon icon="spa">Makijaż</ServiceIcon>
          </li>
          <div className={css["line-break-vertical-black"]}></div>
          <li>
            <ServiceIcon icon="mortar-pestle">Zabiegi pielęgnacyjne</ServiceIcon>
          </li>
          <div className={css["line-break-vertical-black"]}></div>
          <li>
            <ServiceIcon icon="spray-can-sparkles">
              {"Pedicure & Manicure"}
            </ServiceIcon>
          </li>
          <div className={css["line-break-vertical-black"]}></div>
          <li className={css["last-child"]}>
            <ServiceIcon icon="spa">Makijaż permanentny</ServiceIcon>
          </li>
        </ul>
      </MediaQuery>
      <Button
        className={css.button}
        linkClassName={css["button-link"]}
        path={"/cennik"}
      >
        Cennik
      </Button>
    </section>
  );
}

export default Services;
