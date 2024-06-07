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
    <div className="border-brown-light relative flex aspect-[64/35] w-full items-center justify-center rounded-lg border-2 drop-shadow-lg">
      <Image
        alt="Painting Image"
        src={imagePath && imagePath}
        width={512}
        height={280}
        className="rounded-[6px]"
      />
      <HintBox hints={hints} />
    </div>
  );
};

export default ImageBox;
