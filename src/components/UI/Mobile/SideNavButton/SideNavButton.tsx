import css from "./SideNavButton.module.css";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

type Props = {
  path: string;
  icon?: IconName;
  children: string;
};

const SideNavButton: React.FC<Props> = ({ path, icon, children }) => {
  return (
    <div className={css["sidenav-button"]}>
      {icon && <FontAwesomeIcon icon={icon} className={css["icon-fix"]} />}
      <Link href={path}>
        <a className={css.link}>{children}</a>
      </Link>
    </div>
  );
};

export default SideNavButton;
