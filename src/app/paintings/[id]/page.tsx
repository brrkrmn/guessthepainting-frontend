import { paintingsService } from "@/services/paintings"

type PageProps = {
  params: {
    id: string
  }
}

const Page = async ({ params }: PageProps) => {
  const res = await paintingsService.getPainting(params.id)

  return (
    <div>
      {res.title}
    </div>
  )
}

export default Page