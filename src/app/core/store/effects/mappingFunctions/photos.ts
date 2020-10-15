import { IPhoto } from '@app/core/types/photos.types';

const mapServerToLocalPhoto = ({ id, title, url }): IPhoto => ({ id, title, url });

export const mapServerToLocalPhotos = (data: any[]) => data.map(mapServerToLocalPhoto);
