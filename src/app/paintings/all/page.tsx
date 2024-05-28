import { paintingsService } from "@/services/paintings";

const Page = async () => {
  const lastId = (await paintingsService.getLastId()).lastId;
  return <div>{lastId}</div>;
};

export default Page;
