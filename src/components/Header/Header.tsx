import css from "./Header.module.css";

import MediaQuery from "react-responsive";
import { useRouter } from "next/router";

import { GetImage } from "../providers/images";
import { fbUrl, instaUrl } from "../providers/urls";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { sideNavActions } from "../../store/side-nav";

import Hamburger from "../UI/Hamburger/Hamburger";
import SideNav from "../Mobile/SideNav/SideNav";
import Button from "../UI/Button/Button";

function Header() {
  const router = useRouter();
  console.log(router.pathname);
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
                  path="/"
                >
                  Strona Główna
                </Button>
              </div>
              <div>
                {" "}
                <Button
                  className={css.button}
                  linkClassName={css["button-link"]}
                  path="/cennik"
                >
                  Cennik
                </Button>
              </div>
              <div>
                <Button
                  className={css.button}
                  linkClassName={css["button-link"]}
                  path="/kontakt"
                >
                  Kontakt
                </Button>
              </div>
            </li>
            <li className={css["nav-divider"]}></li>
            <li className={css["img-container"]}>
              {GetImage("logo-venice.png")}
            </li>
            <li className={css["nav-buttons-right"]}>
              <div>
                <a
                  className={`${css.button} ${css["button-link"]}`}
                  href={fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </div>
              <div>
                <a
                  className={`${css.button} ${css["button-link"]}`}
                  href={instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </li>
          </ul>
        </MediaQuery>
      </nav>
    </header>
  );
}

export default Header;
