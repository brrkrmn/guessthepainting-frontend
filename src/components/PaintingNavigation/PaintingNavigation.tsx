"use client";

import { useParams } from "next/navigation";
import { NavigationButton } from "./components/NavigationButton";

const PaintingNavigation = ({ lastId }: { lastId: number }) => {
  const id = Number(useParams().id);

  return (
    <div className="flex w-full items-center justify-between">
      <NavigationButton
        label="Previous"
        href={`/paintings/${Math.max(id - 1, 1)}`}
        disabled={id === 1}
      />
      <NavigationButton
        label="See all paintings"
        href="/paintings/all"
        disabled={false}
      />
      <NavigationButton
        label="Next"
        href={`/paintings/${Math.min(id + 1, lastId)}`}
        disabled={id === lastId}
      />
    </div>
  );
};

export default PaintingNavigation;
