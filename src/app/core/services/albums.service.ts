import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private httpClient: HttpClient) { }

  getAlbumsByUser(userId: number): Observable<any> {
    console.log('in servce');
    return this.httpClient.get('albums', { params: { userId: userId.toString() } });
  }
}
