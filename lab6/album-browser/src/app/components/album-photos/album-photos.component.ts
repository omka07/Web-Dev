import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styles: [`.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; padding: 20px; }`]
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  albumId: any;

  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService,
    private location: Location,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.albumId = params.get('id');
      
      if (this.albumId) {
        this.albumService.getAlbumPhotos(Number(this.albumId)).subscribe({
          next: (data) => {
            console.log('ФОТО ПРИШЛИ:', data.length);
            this.photos = data;
            
          
            this.cdr.detectChanges(); 
          },
          error: (err) => console.error('Ошибка:', err)
        });
      }
    });
  }

  back() {
    this.location.back();
  }
}