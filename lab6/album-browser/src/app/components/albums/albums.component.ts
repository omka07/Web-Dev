import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';   
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,  
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  private readonly STORAGE_KEY = 'my_albums_list';

  constructor(private albumService: AlbumService) {}


  ngOnInit() {
    const saved = localStorage.getItem('my_albums');
    if (saved) {
      this.albums = JSON.parse(saved);
      this.loading = false;
    } else {
      this.albumService.getAlbums().subscribe(data => {
        this.albums = data;
        localStorage.setItem('my_albums', JSON.stringify(data));
        this.loading = false;
      });
    }
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(a => a.id !== id);
 
    localStorage.setItem('my_albums', JSON.stringify(this.albums));
    this.albumService.deleteAlbum(id).subscribe();
  }
}