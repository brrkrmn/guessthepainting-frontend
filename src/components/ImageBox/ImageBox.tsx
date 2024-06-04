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
    <div className="relative flex aspect-[64/35] w-full items-center justify-center rounded-md border-2 border-[#1212]">
      <Image
        alt="Painting Image"
        src={imagePath && imagePath}
        width={512}
        height={280}
      />
      <HintBox hints={hints} />
    </div>
  );
};

export default ImageBox;
