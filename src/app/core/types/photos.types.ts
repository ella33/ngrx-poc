export interface IPhoto {
  id: number;
  title: string;
  url: string;
}

export interface IPhotoCollection {
  albumId: number;
  data: IPhoto[];
}
