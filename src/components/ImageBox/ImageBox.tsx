"use client";

import { useGameContext } from "@/context/gameProvider";
import Image from "next/image";
import { useParams } from "next/navigation";
import { HintBox } from "./components/HintBox";

const ImageBox = ({ hints }: { hints: string[] }) => {
  const { displayedStep } = useGameContext();
  const id = useParams().id;
  const imagePath = `/assets/paintings/${id}/${displayedStep}.jpg`;

  return (
    <div
      className={`relative flex aspect-[64/35] h-[280px] w-full items-center justify-center overflow-hidden rounded-lg ${displayedStep !== 6 && "border-2"} border-brown-light drop-shadow-lg`}
    >
      <Image
        alt="Painting Image"
        src={imagePath && imagePath}
        width={512}
        height={280}
        className="h-[280px] w-auto rounded-[6px] object-cover"
      />
      <HintBox hints={hints} />
    </div>
  );
};

export default ImageBox;
