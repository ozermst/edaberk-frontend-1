import React from "react";
import NextImage from "next/image";

import IImage from "../interfaces/IImage";
import { getStrapiMedia } from "../lib/media";

interface ImageProps {
  image: IImage;
}

function Image({ image }: ImageProps) {
  const { url, alternativeText, width, height } = image.data.attributes;

  // const loader = () => {
  //   return getStrapiMedia(image)
  // }

  return (
    <NextImage
      // loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
}

export default Image;
