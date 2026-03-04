import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Добавить это
import { RouterLink } from '@angular/router';   // Добавить это
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,        // Убедись, что стоит standalone: true
  imports: [CommonModule, RouterLink], // Добавь эти зависимости сюда
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
      this.loading = false;
    });
  }

  deleteAlbum(id: number) {
    // Сначала обновляем UI локально, как того требует задание [cite: 34, 71]
    this.albums = this.albums.filter(a => a.id !== id); 
    // Затем отправляем запрос на сервер [cite: 56]
    this.albumService.deleteAlbum(id).subscribe();
  }
}