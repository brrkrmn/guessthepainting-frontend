import { backendService } from "@/api";
import { API_URLS } from "@/api/api.constants";
import { SearchPaintingsResponse } from "./search.types";

export const searchService = {
  searchPaintings: async (query: string) => {
    const res = await backendService.get<SearchPaintingsResponse>(
      API_URLS.search.paintings(query),
    );
    return res.data;
  },
};
