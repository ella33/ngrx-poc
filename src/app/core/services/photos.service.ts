import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  getPhotosByAlbum(albumId: number): Observable<any> {
    return this.httpClient.get('photos', { params: { albumId: albumId.toString() } });
  }
}
