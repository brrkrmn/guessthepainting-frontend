import { ServiceUnavailable } from "@/components/ServiceUnavailable";
import { paintingsService } from "@/services/paintings";
import { redirect } from "next/navigation";

// Rendered per request: prerendering this at build time bakes a stale lastId
// into the CDN, and a backend failure during the build gets cached as a
// permanently broken page.
export const dynamic = "force-dynamic";

const Home = async () => {
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

export default Home;
