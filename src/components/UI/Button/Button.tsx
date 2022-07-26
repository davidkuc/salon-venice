import css from "./Button.module.css";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

type Props = {
  path: string;
  icon?: IconDefinition;
  children: string;
};

const Button: React.FC<Props> = ({ path, icon, children }) => {
  return (
    <div className={css.button}>
      {icon && <FontAwesomeIcon icon={icon} className={css["icon-fix"]} />}
      <Link href={path}>
        <a className={css.link}>{children}</a>
      </Link>
    </div>
  );
};

export default Button;
