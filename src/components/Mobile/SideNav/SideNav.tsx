import css from "./SideNav.module.css";

import Backdrop from "../../UI/Backdrop/Backdrop";
import SideNavButton from "../../UI/Mobile/SideNavButton/SideNavButton";
import BrandLink from "../../UI/BrandLink/BrandLink";

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
