import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbarTop = document.getElementById('navbarTop');
    const navbarBottom = document.getElementById('navbarBottom');
    
    if (navbarTop && navbarBottom) {
      const scrollPosition = window.pageYOffset;
      const navbarTopHeight = navbarTop.offsetHeight;
      
      if (scrollPosition > navbarTopHeight) {
        navbarTop.classList.add('hidden');
        navbarBottom.classList.add('fixed');
      } else {
        navbarTop.classList.remove('hidden');
        navbarBottom.classList.remove('fixed');
      }
    }
  }


  currentLanguage = "English";
  currentCurrency = "USD";
  currentFollowers = 7500;

  
  

}