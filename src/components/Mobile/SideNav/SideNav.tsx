import css from "./SideNav.module.css";
import "../../providers/icons";
import { fbUrl, instaUrl } from "../../providers/urls";

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
          path={"/"}
        >
          Strona Główna
        </SideNavButton>
        <SideNavButton
          linkClassName={css["sideNavButton-link"]}
          className={css.sideNavButton}
          path={"/cennik"}
        >
          Cennik
        </SideNavButton>
        <SideNavButton
          linkClassName={css["sideNavButton-link"]}
          className={css.sideNavButton}
          path={"/kontakt"}
        >
          Kontakt
        </SideNavButton>
        <BrandLink
          path={fbUrl}
          icon={faFacebookF}
          className={css["brand-link"]}
        >
          Facebook
        </BrandLink>
        <BrandLink
          path={instaUrl}
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
