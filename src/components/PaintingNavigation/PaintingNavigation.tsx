"use client";

import { useParams } from "next/navigation";
import {
  MdOutlineList,
  MdOutlineNavigateBefore,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { NavigationButton } from "./components/NavigationButton";

const PaintingNavigation = ({ lastId }: { lastId: number }) => {
  const id = Number(useParams().id);

  return (
    <div className="flex w-full items-center justify-between">
      <NavigationButton
        label="Previous"
        icon={<MdOutlineNavigateBefore />}
        href={`/paintings/${Math.max(id - 1, 1)}`}
        disabled={id === 1}
      />
      <NavigationButton
        label="See all"
        icon={<MdOutlineList />}
        href="/paintings/all"
        disabled={false}
      />
      <NavigationButton
        label="Next"
        icon={<MdOutlineNavigateNext />}
        href={`/paintings/${Math.min(id + 1, lastId)}`}
        disabled={id === lastId}
      />
    </div>
  );
};

export default PaintingNavigation;
