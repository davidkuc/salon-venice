import css from "./GalleryImage.module.css";

import { ImageObj } from "../providers/types";
import { GetImage } from "../providers/images";

/**
 * @param imageName Name of the image with the extension (ex. image.jpg)
 */
type Props = {
  onClick: (id: number) => void;
  className: string;
  image: ImageObj;
};

function GalleryImage(props: Props) {
  const id: number = props.image.id;

  const imageClickHandler = () => {
    props.onClick(id);
  };

  return (
    <li onClick={imageClickHandler} className={props.className}>
      {GetImage(props.image.imageName)}
    </li>
  );
}

export default GalleryImage;
