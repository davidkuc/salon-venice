import css from "./Gallery.module.css";

import { useState } from "react";

import ImageSlider from "../UI/ImageSlider/ImageSlider";
import GalleryImage from "./GalleryImage";
import { ImageObj } from "../providers/types";

function Gallery() {
  const [imageOpen, setImageOpen] = useState(true);

  let initialImageId = 0;

  const images = [
    new ImageObj("face1.jpg", 1),
    new ImageObj("nails1.jpg", 2),
    new ImageObj("nails2.jpg", 3),
    new ImageObj("nails3.jpg", 4),
  ];

  const exitClickHandler = () => {
    setImageOpen(false);
  };

  const openImageHandler = (id: number) => {
    initialImageId = id;
    setImageOpen(true);
  };

  return (
    <section className={css.section}>
      <div className={css.title}>Galeria</div>
      <div className={css["line-break-horizontal"]}></div>
      <ul className={css.list}>
        <GalleryImage
          onClick={openImageHandler}
          className={css.face1}
          image={images[0]}
        />
        <GalleryImage
          onClick={openImageHandler}
          className={css.nails1}
          image={images[1]}
        />
        <GalleryImage
          onClick={openImageHandler}
          className={css.nails2}
          image={images[2]}
        />
        <GalleryImage
          onClick={openImageHandler}
          className={css.nails3}
          image={images[3]}
        />
      </ul>
      {imageOpen && (
        <ImageSlider
          initialImageId={initialImageId}
          images={images}
          onExitClick={exitClickHandler}
        />
      )}
    </section>
  );
}

export default Gallery;
