import ImageBox from "@/app/components/ImageBox"
import StepBoxes from "@/app/components/StepBoxes"
import { paintingsService } from "@/services/paintings"

type PageProps = {
  params: {
    id: string
  }
}

const Page = async ({ params }: PageProps) => {
  const res = await paintingsService.getPainting(params.id)

  return (
    <div className='border-2 w-[512px] h-screen pb-10 flex flex-col items-center border-2 border-[#121]'>
      <h1 className="text-2xl font-medium">Guess the Painting</h1>
      <div className="w-full my-8 flex flex-col items-center gap-2">
        <p className="text-center text-[#45484c] font-normal">Painting #{res.id}</p>
        <ImageBox hints={res.hints} />
        <StepBoxes id={res.id} />
      </div>
      <div className="mt-auto w-full flex items-center justify-between">
        <button className='border-2 border-black rounded-lg'>previous</button>
        <button className='border-2 border-black rounded-lg'>See all paintings</button>
        <button className="border-2 border-black rounded-lg">next</button>
      </div>
    </div>
  )
}

export default Page