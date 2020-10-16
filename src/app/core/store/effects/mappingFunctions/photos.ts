import { IPhoto } from '@app/core/types/photos.types';

const mapServerToLocalPhoto = ({ id, title, url, thumbnailUrl }): IPhoto => ({ id, title, url, thumbnailUrl });

export const mapServerToLocalPhotos = (data: any[]) => data.map(mapServerToLocalPhoto);
