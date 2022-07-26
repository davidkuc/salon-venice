import css from "./ServiceIcon.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconName;
  children: string;
};

const ServicesIcon: React.FC<Props> = ({ icon, children }) => {
  return (
    <section className={css.section}>
      <FontAwesomeIcon icon={icon} className={css["icon-fix"]} />
      <div>{children}</div>
    </section>
  );
};

export default ServicesIcon;
