import { backendService } from "@/api";
import { API_URLS } from "@/api/api.constants";
import { SearchPaintingResponse } from "./search.types";

export const searchService = {
  searchPainting: async (query: string) => {
    const res = await backendService.get<SearchPaintingResponse>(
      API_URLS.search.paintings(query),
    );
    return res.data;
  },
  autocompletePainting: async (query: string) => {
    const res = await backendService.get<SearchPaintingResponse>(
      API_URLS.search.autocomplete(query),
    );
    return res.data;
  },
};
