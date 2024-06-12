import { paintingsService } from "@/services/paintings";
import Link from "next/link";

const Page = async () => {
  const lastId = (await paintingsService.getLastId()).lastId;
  const paintings = [];
  for (let i = lastId; i >= 1; i--) {
    paintings.push(i);
  }

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-start gap-2 px-4 py-10">
      <h1 className="mb-4 rounded-full px-2 text-center font-fairplay text-3xl font-medium text-brown-dark backdrop-blur-sm">
        Previous Paintings
      </h1>
      <div className="flex w-full flex-col items-center justify-start gap-2 overflow-y-scroll overscroll-none pb-60">
        {paintings.reverse().map((painting) => (
          <Link
            href={`/paintings/${painting}`}
            className="group relative flex h-8 min-h-8 w-40 items-center justify-center gap-1 overflow-hidden rounded-lg border border-brown-light font-fairplay text-xl text-brown-light transition hover:border-blue-dark hover:shadow-md"
            key={painting}
          >
            <span className="transition group-hover:-translate-x-[200%]">
              Painting
            </span>
            <span className="transition group-hover:absolute group-hover:scale-105 group-hover:text-blue-dark">
              #{painting}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
