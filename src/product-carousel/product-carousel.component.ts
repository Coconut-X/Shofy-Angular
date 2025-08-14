
import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements AfterViewInit {
  hoveredIndex: number | null = null;
  // Use @ViewChild to get references to our HTML elements
  @ViewChild('imagesRow') imagesRow!: ElementRef<HTMLDivElement>;
  @ViewChild('imagesContainer') imagesContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollbarThumb') scrollbarThumb!: ElementRef<HTMLDivElement>;
  @ViewChild('scrollbarContainer') scrollbarContainer!: ElementRef<HTMLDivElement>;

  products = [
    { name: 'Stylish Bag', price: '120.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' },
    { name: 'Premium Shoes', price: '95.00', image: 'https://i.ibb.co/xgPThxC/shoes-1.png' },
    { name: 'Elegant Bag', price: '135.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' },
    { name: 'Sport Shoes', price: '110.00', image: 'https://i.ibb.co/xgPThxC/shoes-1.png' },
    { name: 'Designer Bag', price: '150.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' },
    { name: 'Running Shoes', price: '89.00', image: 'https://i.ibb.co/xgPThxC/shoes-1.png' },
    { name: 'Luxury Bag', price: '200.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' },
    { name: 'Casual Shoes', price: '75.00', image: 'https://i.ibb.co/xgPThxC/shoes-1.png' },
    { name: 'Travel Bag', price: '125.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' },
    { name: 'Fashion Shoes', price: '105.00', image: 'https://i.ibb.co/xgPThxC/shoes-1.png' },
    { name: 'Business Bag', price: '180.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' },
    { name: 'Comfort Shoes', price: '85.00', image: 'https://i.ibb.co/xgPThxC/shoes-1.png' },
    { name: 'Weekend Bag', price: '140.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' },
    { name: 'Athletic Shoes', price: '115.00', image: 'https://i.ibb.co/xgPThxC/shoes-1.png' },
    { name: 'Evening Bag', price: '160.00', image: 'https://i.ibb.co/zrdMnPd/bag-5.png' }
  ];

  // State variables for dragging logic
  isDragging = false;
  dragStartX = 0;
  dragStartPosition = 0;

  // This lifecycle hook runs after the view is initialized, so the #elements are available.
  ngAfterViewInit() {
    this.calculateThumbWidth();
  }

  // Listen for window resize to recalculate the thumb width
  @HostListener('window:resize')
  onResize() {
    this.calculateThumbWidth();
    this.updateImageScroll();
  }

  // Listen for mouse/touch movements and releases on the whole document
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.handleDrag(event.clientX);
    }
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      event.preventDefault();
      this.handleDrag(event.touches[0].clientX);
    }
  }

  @HostListener('document:mouseup')
  @HostListener('document:touchend')
  stopDrag() {
    if (this.isDragging) {
      this.isDragging = false;
      this.scrollbarThumb.nativeElement.classList.remove('dragging');
    }
  }

  calculateThumbWidth() {
    const containerWidth = this.imagesContainer.nativeElement.offsetWidth;
    const rowWidth = this.imagesRow.nativeElement.scrollWidth;
    const thumbWidth = (containerWidth / rowWidth) * 100;
    this.scrollbarThumb.nativeElement.style.width = `${Math.max(thumbWidth, 10)}%`; // Minimum 10%
  }

  startDrag(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    this.isDragging = true;
    const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.dragStartX = clientX;
    this.dragStartPosition = this.scrollbarThumb.nativeElement.offsetLeft;
    this.scrollbarThumb.nativeElement.classList.add('dragging');
  }

  handleDrag(clientX: number) {
    const scrollbarContainer = this.scrollbarContainer.nativeElement;
    const thumb = this.scrollbarThumb.nativeElement;
    
    const deltaX = clientX - this.dragStartX;
    let newThumbLeft = this.dragStartPosition + deltaX;

    // Constrain the thumb within the scrollbar track
    const maxThumbLeft = scrollbarContainer.offsetWidth - thumb.offsetWidth;
    newThumbLeft = Math.max(0, Math.min(newThumbLeft, maxThumbLeft));
    
    thumb.style.left = `${newThumbLeft}px`;
    this.updateImageScroll();
  }

  updateImageScroll() {
    const thumb = this.scrollbarThumb.nativeElement;
    const scrollbarContainer = this.scrollbarContainer.nativeElement;
    const row = this.imagesRow.nativeElement;
    const container = this.imagesContainer.nativeElement;

    const maxThumbLeft = scrollbarContainer.offsetWidth - thumb.offsetWidth;
    const scrollPercentage = thumb.offsetLeft / maxThumbLeft;
    
    const maxScroll = row.scrollWidth - container.offsetWidth;
    const scrollPosition = scrollPercentage * maxScroll;

    row.style.transform = `translateX(-${scrollPosition}px)`;
  }
}