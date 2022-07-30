import Image from "next/image";

import css from "./images.module.css";

/**
 * 
 * @param imageName Image name with extension (ex. image.jpg)
 * @returns 
 */
export function GetImage(imageName: string) {
  return <Image src={`/${imageName}`} alt="me" layout="fill" className={css.image} />;
}
