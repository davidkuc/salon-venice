import css from "./SideNav.module.css";
import "../../providers/icons"

import Backdrop from "../../UI/Backdrop/Backdrop";
import SideNavButton from "../../UI/Mobile/SideNavButton/SideNavButton";
import BrandLink from "../../UI/BrandLink/BrandLink";

import { useAppDispatch } from "../../../hooks/hooks";
import { sideNavActions } from "../../../store/side-nav";

import {faFacebookF, faInstagram} from "@fortawesome/free-brands-svg-icons"

function SideNav() {
  const dispatch = useAppDispatch();

  const backdropClickHandler = () => {
    dispatch(sideNavActions.close());
  };

  return (
    <div>
      <Backdrop onClick={backdropClickHandler} />
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
