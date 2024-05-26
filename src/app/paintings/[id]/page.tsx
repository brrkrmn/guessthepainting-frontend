import ImageBox from "@/components/ImageBox/ImageBox";
import StepBoxes from "@/components/StepBoxes/StepBoxes";
import { paintingsService } from "@/services/paintings";

type PageProps = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const res = await paintingsService.getPainting(params.id);

  return (
    <div className="flex h-screen w-[512px] flex-col items-center border-2 border-[#121]  pb-10">
      <h1 className="text-2xl font-medium">Guess the Painting</h1>
      <div className="my-8 flex w-full flex-col items-center gap-2">
        <p className="text-center font-normal text-[#45484c]">
          Painting #{res.id}
        </p>
        <ImageBox hints={res.hints} />
        <StepBoxes />
      </div>
      <div className="mt-auto flex w-full items-center justify-between">
        <button className="rounded-lg border-2 border-black">previous</button>
        <button className="rounded-lg border-2 border-black">
          See all paintings
        </button>
        <button className="rounded-lg border-2 border-black">next</button>
      </div>
    </div>
  );
};

export default Page;
