import css from "./Header.module.css";
import { GetImage } from "../providers/images";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { sideNavActions } from "../../store/side-nav";

import Hamburger from "../UI/Hamburger/Hamburger";
import SideNav from "../Mobile/SideNav/SideNav";
import MediaQuery from "react-responsive";

function Header() {
  const sideNavOpen = useAppSelector((state) => state.sideNav.isOpen);
  const dispatch = useAppDispatch();

  const hamburgerClickHandler = () => {
    dispatch(sideNavActions.open());
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <MediaQuery maxWidth={600}>
          <ul className={css["nav-list__mobile"]}>
            <Hamburger onClick={hamburgerClickHandler} />
            <div className={css["img-container"]}>
              {GetImage("logo-venice.png")}
            </div>
          </ul>
          {sideNavOpen && <SideNav />}
        </MediaQuery>
        <MediaQuery minWidth={600}>
          <ul className={css["nav-list"]}>
            <li>Strona Główna</li>
            <li>Cennik</li>
            <li>kontakt</li>
            <li className={css.title}>Salon Kosmetyczny Venice</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </MediaQuery>
      </nav>
    </header>
  );
}

export default Header;
