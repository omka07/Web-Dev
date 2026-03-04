import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com'; // [cite: 25]

  constructor(private http: HttpClient) {} // [cite: 50]

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`); // [cite: 52]
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`); // [cite: 52]
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`); // [cite: 52]
  }

  updateAlbum(album: Album): Observable<Album> {
    // Используем http.put для обновления ресурса [cite: 31, 53]
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album); 
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`); // [cite: 56]
  }
}