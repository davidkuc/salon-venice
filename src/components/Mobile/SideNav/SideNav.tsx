import css from "./SideNav.module.css";
import "../../providers/icons";

import Backdrop from "../../UI/Backdrop/Backdrop";
import SideNavButton from "../../UI/Button/Button";
import BrandLink from "../../UI/BrandLink/BrandLink";

import { useAppDispatch } from "../../../hooks/hooks";
import { sideNavActions } from "../../../store/side-nav";

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
        <SideNavButton
          linkClassName={css["sideNavButton-link"]}
          className={css.sideNavButton}
          path={"dummy"}
        >
          Strona Główna
        </SideNavButton>
        <SideNavButton
          linkClassName={css["sideNavButton-link"]}
          className={css.sideNavButton}
          path={"dummy"}
        >
          Cennik
        </SideNavButton>
        <SideNavButton
          linkClassName={css["sideNavButton-link"]}
          className={css.sideNavButton}
          path={"dummy"}
        >
          Kontakt
        </SideNavButton>
        <BrandLink
          path={"dummy"}
          icon={faFacebookF}
          className={css["brand-link"]}
        >
          Facebook
        </BrandLink>
        <BrandLink
          path={"dummy"}
          icon={faInstagram}
          className={css["brand-link"]}
        >
          Instagram
        </BrandLink>
      </ul>
    </div>
  );
}

export default SideNav;
