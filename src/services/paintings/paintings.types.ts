export type Painting = {
  id: number;
  title: string;
  hints: {
    image: string;
    text?: string;
  }[],
}

export type GetPaintingResponse = Painting

export type GetLastIdResponse = {
  lastId: number
}