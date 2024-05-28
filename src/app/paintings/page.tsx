import { paintingsService } from "@/services/paintings";
import { redirect } from "next/navigation";

const Page = async () => {
  const res = await paintingsService.getLastId();
  redirect(`/paintings/${res.lastId.toString()}`);
};

export default Page;