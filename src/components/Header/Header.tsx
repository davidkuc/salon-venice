import css from "./Header.module.css";
import { GetImage } from "../providers/images";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { sideNavActions } from "../../store/side-nav";

import Hamburger from "../UI/Hamburger/Hamburger";
import SideNav from "../Mobile/SideNav/SideNav";
import MediaQuery from "react-responsive";
import Button from "../UI/Button/Button";

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
          <ul className={css["nav-list-mobile"]}>
            <Hamburger onClick={hamburgerClickHandler} />
            <div className={css["img-container-mobile"]}>
              {GetImage("logo-venice.png")}
            </div>
          </ul>
          {sideNavOpen && <SideNav />}
        </MediaQuery>
        <MediaQuery minWidth={600}>
          <ul className={css["nav-list"]}>
            <li className={css["nav-buttons-left"]}>
              <div>
                {" "}
                <Button
                  className={css.button}
                  linkClassName={css["button-link"]}
                  path="dummy"
                >
                  Strona Główna
                </Button>
              </div>
              <div>
                {" "}
                <Button
                  className={css.button}
                  linkClassName={css["button-link"]}
                  path="dummy"
                >
                  Cennik
                </Button>
              </div>
              <div>
                <Button
                  className={css.button}
                  linkClassName={css["button-link"]}
                  path="dummy"
                >
                  Kontakt
                </Button>
              </div>
            </li>

            <li className={css["img-container"]}>
              {GetImage("logo-venice.png")}
            </li>
            <li className={css["nav-buttons-right"]}>
              <div>
                <Button
                  className={css.button}
                  linkClassName={css["button-link"]}
                  path="dummy"
                >
                  Facebook
                </Button>
              </div>
              <div>
                <Button
                  className={css.button}
                  linkClassName={css["button-link"]}
                  path="dummy"
                >
                  Instagram
                </Button>
              </div>
            </li>
          </ul>
        </MediaQuery>
      </nav>
    </header>
  );
}

export default Header;
