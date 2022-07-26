import css from "./Header.module.css";
import { Logo } from "../../images/images";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { sideNavActions } from "../../store/side-nav";

import { Breakpoint } from "react-socks";
import Hamburger from "../UI/Hamburger/Hamburger";
import SideNav from "../Mobile/SideNav/SideNav";

function Header() {
  const sideNavOpen = useAppSelector((state) => state.sideNav.isOpen);
  const dispatch = useAppDispatch();

  const hamburgerClickHandler = () => {
    dispatch(sideNavActions.open());
  };

  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <Breakpoint small down>
          <ul className={css["nav-list__mobile"]}>
            <Hamburger onClick={hamburgerClickHandler} />
            <div className={css["img-container"]}>
              <Logo />
            </div>
          </ul>
          {sideNavOpen && <SideNav />}
        </Breakpoint>
        <Breakpoint medium up>
          <ul className={css["nav-list"]}>
            <li>Strona Główna</li>
            <li>Cennik</li>
            <li>kontakt</li>
            <li className={css.title}>Salon Kosmetyczny Venice</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </Breakpoint>
      </nav>
    </div>
  );
}

export default Header;
