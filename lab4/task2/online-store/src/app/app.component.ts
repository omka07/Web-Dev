import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'; // Импорт

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent], 
  template: `
    <header>
        <h1>My Online Store</h1>
    </header>
    <main>
        <app-product-list></app-product-list>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-store';
}