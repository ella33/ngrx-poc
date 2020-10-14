import { IAlbum } from '@app/core/types/albums.types';

export const mapServerToLocalAlbums = (data): IAlbum[] => data.map(({ id, title }) => ({ id, title }));
