import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  image?: string;
  grisStyles?: string;
}

const GridOption = ({ title, image, grisStyles }: Props) => {
  return (
    <Link
      href={`/search?q=${title}`}
      className={`grid-option relative  ${grisStyles}`}
    >
      <h2 className="text-xl font-extrabold  text-black">{title}</h2>

      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md -z-10 opacity-60"
        />
      )}
    </Link>
  );
};

export default GridOption;
