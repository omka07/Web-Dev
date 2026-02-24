import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Обязательно для *ngFor
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'iPhone 13 128GB',
      description: 'Отличный смартфон от Apple с ярким экраном и мощным процессором.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
      price: 298000,
      reviews: 1205
    },
    {
      id: 2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p00/33081235.jpg?format=gallery-medium',
      name: 'Xiaomi Redmi Note 13',
      description: 'Бюджетный хит с хорошей камерой и емкой батареей.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-12-gb-512-gb-chernyi-116684101/?c=750000000',
      price: 78000,
      reviews: 843
    },
    {
      id: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h59/81433687392286.jpg?format=gallery-medium',
      name: 'Пылесос Dyson Slim Fluffy серый, фиолетовый',
      description: 'Пылосос, в комплекте с кейсом.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dyson-slim-fluffy-seryi-fioletovyi-111044307/?c=750000000',
      price: 320000,
      reviews: 45
    },
    {
      id: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с поддержкой 4K и HDR.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/',
      price: 245000,
      reviews: 650
    },
    {
      id: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h79/hdf/87077988368414.png?format=gallery-medium',
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Беспроводные наушники с активным шумоподавлением и студийным звуком.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-buds-3-seryi-123383427/?c=750000000',
      price: 75000,
      reviews: 230
    },
    {
      id: 6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Apple MacBook Air 13 M2',
      description: 'Сверхтонкий ноутбук с производительным чипом M2.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/',
      price: 520000,
      reviews: 112
    },
    {
      id: 7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Компактная рожковая кофеварка для приготовления эспрессо и капучино.',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      price: 89000,
      reviews: 94
    },
    {
      id: 8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
      name: 'Яндекс Станция Литл 2',
      description: 'Умная колонка с голосовым помощником Алиса.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-2-fioletovyi-122679962/?c=750000000',
      price: 24990,
      reviews: 1560
    },
  ];


  share(link: string) {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + link)}`;
    window.open(shareUrl, '_blank');
  }
}