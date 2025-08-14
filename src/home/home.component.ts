import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterOutlet, NavbarComponent, ProductCarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true ,
})
export class HomeComponent {
  sliderImages = [
    "https://shofy-angular.vercel.app/assets/img/slider/2/slider-1.png",
    "https://shofy-angular.vercel.app/assets/img/slider/2/slider-2.png",
    "https://shofy-angular.vercel.app/assets/img/slider/2/slider-3.png"
  ];

  sliderMessages: string[][] = [
    ['New Arrivals 2025', 'The Clothing \nCollection'],
    ['Best Selling 2025','The Summer \nCollection'],
    ['Winter Has Arrived', 'Amazing New \nDesigns']
  ];

  fashionCategories: (string | number)[][] = [
    [1,'Clothing', 'https://i.ibb.co/ZWfqMXs/fashion-cat-1.jpg'],
    [2,'Bags', 'https://i.ibb.co/GsDLfnh/fashion-cat-2.jpg'],
    [3,'Shoes', 'https://i.ibb.co/H2NsVHm/fashion-cat-3.jpg']
  ];


  rightArrowIcon = "data:image/svg+xml,%3Csvg%20_ngcontent-ng-c362459964%3D%22%22%20width%3D%2217%22%20height%3D%2215%22%20viewBox%3D%220%200%2017%2015%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20_ngcontent-ng-c362459964%3D%22%22%20d%3D%22M16%207.5L1%207.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20_ngcontent-ng-c362459964%3D%22%22%20d%3D%22M9.9502%201.47541L16.0002%207.49941L9.9502%2013.5244%22%20stroke%3D%22currentColor%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";
  // archIcon = "data:image/svg+xml,%3Csvg%20_ngcontent-ng-c181650216%3D%22%22%20width%3D%2282%22%20height%3D%2222%22%20viewBox%3D%220%200%2082%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20_ngcontent-ng-c181650216%3D%22%22%20d%3D%22M81%2014.5798C0.890564%20-8.05914%20-5.81154%200.0503902%205.00322%2021%22%20stroke%3D%22currentColor%22%20stroke-opacity%3D%220.3%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%223.8637%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";
  archIcon = "data:image/svg+xml,%3Csvg%20_ngcontent-ng-c181650216%3D%22%22%20width%3D%2282%22%20height%3D%2222%22%20viewBox%3D%220%200%2082%2022%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20_ngcontent-ng-c181650216%3D%22%22%20d%3D%22M81%2014.5798C0.890564%20-8.05914%20-5.81154%200.0503902%205.00322%2021%22%20stroke%3D%22%23E55353%22%20stroke-opacity%3D%220.3%22%20stroke-width%3D%222%22%20stroke-miterlimit%3D%223.8637%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E";
  message1 = this.sliderMessages[0][0];
  message2 = this.sliderMessages[0][1];
  sliderImage = this.sliderImages[0];
  activeSlider = 0;

  constructor(private router: Router) {}

  setActiveSlider(idx: number) {
    this.activeSlider = idx;
    this.message1 = this.sliderMessages[idx][0];
    this.message2 = this.sliderMessages[idx][1];
    this.sliderImage = this.sliderImages[idx];
  }

  goToCategory(category: string) {
    this.router.navigate([`/${category.toLowerCase()}`]);
  }
}
