import css from "./Header.module.css";
import logo from "../../images/logo.jpg";

import { Breakpoint } from "react-socks";
import Hamburger from "../UI/Hamburger/Hamburger";
import SideNav from "../UI/SideNav/SideNav";

function Header() {
  return (
    <div className={css.header}>
      <nav className={css.nav}>
        <Breakpoint small down>
          <ul className={css["nav-list__mobile"]}>
            <Hamburger />
            <div className={css["img-container"]}>
              <img src={logo} alt="logo" />
            </div>
          </ul>
          <SideNav />
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
