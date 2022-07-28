import css from "./BrandLink.module.css";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  path: string;
  icon: IconDefinition;
  children: string;
  className?: string;
};

const BrandLink: React.FC<Props> = ({ path, icon, children, className }) => {
  return (
    <ul className={`${css["brand-link"]} ${className}`}>
      <li>
        <div className={css.container}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </li>
      <li>
        <a
          className={`${css.button} ${css.link}`}
          href={path}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </li>
    </ul>
  );
};

export default BrandLink;
