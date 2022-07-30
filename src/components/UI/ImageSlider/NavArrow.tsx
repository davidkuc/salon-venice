import css from "./NavArrow.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onClick: Function;
  direction: string;
};

function NavArrow(props: Props) {
  const navDirection = props.direction === "left" ? "left" : "right";

  const clickHandler = () => {
    props.onClick(navDirection);
  };

  return (
    <div onClick={clickHandler} className={css.arrow}>
      <FontAwesomeIcon
        icon={navDirection === "left" ? "angle-left" : "angle-right"}
        inverse
        size="5x"
      />
    </div>
  );
}

export default NavArrow;
