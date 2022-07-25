import css from "./SideNav.module.css";

import Backdrop from "../Backdrop/Backdrop";
import SideNavButton from "./SideNavButton";
import BrandLink from "./BrandLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function SideNav() {
  return (
    <div>
      <Backdrop />
      <ul className={css.sideNav}>
        <li className={css.title}>Venice</li>
        <SideNavButton path={"dummy"}>Strona Główna</SideNavButton>
        <SideNavButton path={"dummy"}>Cennik</SideNavButton>
        <SideNavButton path={"dummy"}>Kontakt</SideNavButton>
        <BrandLink path={"dummy"} icon={faFacebookF}>
          Facebook
        </BrandLink>
        <BrandLink path={"dummy"} icon={faInstagram}>
        Instagram
        </BrandLink>
      </ul>
    </div>
  );
}

export default SideNav;
