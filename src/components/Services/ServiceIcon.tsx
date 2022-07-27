import css from "./ServiceIcon.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconName;
  children: string;
};

const ServiceIcon: React.FC<Props> = ({ icon, children }) => {
  return (
    <section className={css.section}>
      <FontAwesomeIcon icon={icon} className={css["icon-fix"]} size="6x" />
      <div className={css.text}>{children}</div>
    </section>
  );
};

export default ServiceIcon;
