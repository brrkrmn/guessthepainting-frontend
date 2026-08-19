import { ServiceUnavailable } from "@/components/ServiceUnavailable";
import { paintingsService } from "@/services/paintings";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page = async () => {
  let lastId: number | undefined;

  try {
    lastId = (await paintingsService.getLastId()).lastId;
  } catch (error) {
    console.error("Failed to fetch the last painting id", error);
  }

  // redirect() throws NEXT_REDIRECT, so it has to stay outside the try block.
  if (lastId) {
    redirect(`/paintings/${lastId.toString()}`);
  }

  return <ServiceUnavailable />;
};

export default Page;
