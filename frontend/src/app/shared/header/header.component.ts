import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="tb-header" [class.scrolled]="scrolled()" data-testid="site-header">
      <div class="strip">
        <div class="container strip-inner">
          <span>India's Premier Onboard Travel Magazine</span>
          <span class="hindi">हर सफ़र का हमसफ़र</span>
        </div>
      </div>

      <div class="container bar">
        <a routerLink="/" class="brand" data-testid="brand-logo" (click)="close()">
          <img src="/assets/logo.png" alt="Travel Bharat" />
        </a>

        <nav class="desktop-nav" data-testid="desktop-nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" data-testid="nav-home">Home</a>
          <a routerLink="/about" routerLinkActive="active" data-testid="nav-about">About Us</a>
          <a routerLink="/magazine" routerLinkActive="active" data-testid="nav-magazine">Magazine</a>
          <a routerLink="/advertise" routerLinkActive="active" data-testid="nav-advertise">Advertise With Us</a>
          <a routerLink="/blogs" routerLinkActive="active" data-testid="nav-blogs">Blogs</a>
          <a routerLink="/archives" routerLinkActive="active" data-testid="nav-archives">Archives</a>
          <a routerLink="/contact" routerLinkActive="active" data-testid="nav-contact">Contact Us</a>
        </nav>

        <div class="cta-wrap">
          <a routerLink="/advertise" class="btn small" data-testid="cta-media-kit">Media Kit</a>
          <button class="burger" (click)="toggle()" [attr.aria-expanded]="open()" aria-label="Menu" data-testid="mobile-menu-toggle">
            <span [class.on]="open()"></span>
            <span [class.on]="open()"></span>
            <span [class.on]="open()"></span>
          </button>
        </div>
      </div>

      <div class="mobile" [class.open]="open()" data-testid="mobile-nav">
        <a routerLink="/" (click)="close()" data-testid="m-nav-home">Home</a>
        <a routerLink="/about" (click)="close()" data-testid="m-nav-about">About Us</a>
        <a routerLink="/magazine" (click)="close()" data-testid="m-nav-magazine">Magazine</a>
        <a routerLink="/advertise" (click)="close()" data-testid="m-nav-advertise">Advertise With Us</a>
        <a routerLink="/blogs" (click)="close()" data-testid="m-nav-blogs">Blogs</a>
        <a routerLink="/archives" (click)="close()" data-testid="m-nav-archives">Archives</a>
        <a routerLink="/contact" (click)="close()" data-testid="m-nav-contact">Contact Us</a>
        <a routerLink="/advertise" (click)="close()" class="btn" style="margin-top:1rem" data-testid="m-cta-advertise">Advertise Now</a>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  open = signal(false);
  scrolled = signal(false);

  toggle() { this.open.update(v => !v); document.body.style.overflow = this.open() ? 'hidden' : ''; }
  close() { this.open.set(false); document.body.style.overflow = ''; }

  @HostListener('window:scroll') onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }
}
