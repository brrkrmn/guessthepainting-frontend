export type Painting = {
  id: number;
  title: string;
  hints: string[];
};

export type GetPaintingResponse = Painting

export type GetLastIdResponse = {
  lastId: number
}