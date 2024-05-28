import ImageBox from "@/components/ImageBox/ImageBox";
import { PaintingNavigation } from "@/components/PaintingNavigation";
import StepBoxes from "@/components/StepBoxes/StepBoxes";
import { paintingsService } from "@/services/paintings";

type PageProps = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const painting = await paintingsService.getPainting(params.id);
  const lastId = (await paintingsService.getLastId()).lastId;

  return (
    <div className="flex h-screen w-[512px] flex-col items-center border-2 border-[#121]  pb-10">
      <h1 className="text-2xl font-medium">Guess the Painting</h1>
      <div className="my-8 flex w-full flex-col items-center gap-2">
        <p className="text-center font-normal text-[#45484c]">
          Painting #{painting.id}
        </p>
        <ImageBox hints={painting.hints} />
        <StepBoxes />
      </div>
      <div className="mt-auto flex w-full items-center">
        <PaintingNavigation lastId={Number(lastId)} />
      </div>
    </div>
  );
};

export default Page;
