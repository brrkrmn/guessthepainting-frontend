import ImageBox from "@/components/ImageBox/ImageBox";
import { PaintingNavigation } from "@/components/PaintingNavigation";
import StepBoxes from "@/components/StepBoxes/StepBoxes";
import { SubmitSection } from "@/components/SubmitSection";
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
    <div className="flex h-full max-w-[500px] flex-col items-center justify-start">
      <div className="mt-8 flex w-full flex-col items-center gap-2">
        <p className="text-center font-normal text-[#45484c]">
          Painting #{painting.id}
        </p>
        <ImageBox hints={painting.hints} />
        <StepBoxes />
      </div>
      <div className="mt-2 flex h-full w-full items-center justify-center">
        <SubmitSection paintingTitle={painting.title} />
      </div>
      <div className="mt-auto flex w-full items-center">
        <PaintingNavigation lastId={Number(lastId)} />
      </div>
    </div>
  );
};

export default Page;
