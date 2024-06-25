import { paintingsService } from "@/services/paintings";
import { redirect } from 'next/navigation';

const Home = async () => {
  const res = await paintingsService.getLastId();
  if (res.lastId) {
    redirect(`/paintings/${res.lastId.toString()}`);
  }
}

export default Home;