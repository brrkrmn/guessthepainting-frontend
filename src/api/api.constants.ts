export const API_URLS = {
  paintings: {
    lastId: "paintings/last-id",
    id: (id: string) => `paintings/${id}`,
  },
  search: {
    paintings: (query: string) => `search/paintings/${query}`,
  },
};