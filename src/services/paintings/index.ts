import { backendService } from "@/api";
import { API_URLS } from "@/api/api.constants";
import {
  GetLastIdResponse,
  GetPaintingResponse,
} from "@/services/paintings/paintings.types";

export const paintingsService = {
  getPainting: async (id: string) => {
    const res = await backendService.get<GetPaintingResponse>(
      API_URLS.paintings.id(id),
    );
    return res.data;
  },
  getLastId: async () => {
    const res = await backendService.get<GetLastIdResponse>(
      API_URLS.paintings.lastId,
    );
    return res.data;
  },
};
