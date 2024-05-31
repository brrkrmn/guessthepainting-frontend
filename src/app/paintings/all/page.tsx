import { paintingsService } from "@/services/paintings";
import Link from "next/link";

const Page = async () => {
  const lastId = (await paintingsService.getLastId()).lastId;
  const paintings = [];
  for (let i = lastId; i >= 1; i--) {
    paintings.push(i);
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-start gap-2">
      {paintings.map((painting) => (
        <Link
          href={`/paintings/${painting}`}
          className="flex w-full items-center justify-center rounded-xl border-2"
          key={painting}
        >
          #{painting}
        </Link>
      ))}
    </div>
  );
};

export default Page;
