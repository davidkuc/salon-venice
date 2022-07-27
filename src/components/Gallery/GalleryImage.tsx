import css from "./GallerImage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { onClickFunc } from "../providers/types";

type Props = {
  onClick: onClickFunc;
  className: string;
};

function GalleryImage(props: Props) {
  return <li onClick={props.onClick}></li>;
}

export default GalleryImage;
