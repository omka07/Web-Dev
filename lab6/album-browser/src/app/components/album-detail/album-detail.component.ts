import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    console.log('Loading attempt for ID', id);

    if (id) {
      this.albumService.getAlbum(Number(id)).subscribe({
        next: (data) => {
          console.log('Data came to component:', data);
          this.album = data;
          this.newTitle = data.title;

          this.cdr.detectChanges();
        },
        error: (err) => console.error('Service Error:', err)
      });
    }
  }


  save() {
    if (this.album) {
  
      this.album.title = this.newTitle;

 
      const saved = localStorage.getItem('my_albums');
      if (saved) {
        let allAlbums: Album[] = JSON.parse(saved);
        
        const index = allAlbums.findIndex(a => a.id === this.album?.id);
        if (index !== -1) {
          allAlbums[index].title = this.newTitle;
          
          localStorage.setItem('my_albums', JSON.stringify(allAlbums));
        }
      }

      this.albumService.updateAlbum(this.album).subscribe(() => {
        alert('Saved locally and sent to server!');
      });
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}