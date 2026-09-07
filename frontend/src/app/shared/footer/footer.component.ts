import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="tb-footer" data-testid="site-footer">
      <div class="container">
        <div class="top">
          <div class="brand-col">
            <img src="/assets/logo.png" alt="Travel Bharat" class="logo"/>
            <p class="tag">India's premium onboard travel &amp; lifestyle magazine, distributed on India's Vande Bharat Express services.</p>
            <p class="hindi">हर सफ़र का हमसफ़र 🇮🇳🚆</p>
          </div>

          <div class="link-col">
            <h5>Explore</h5>
            <a routerLink="/">Home</a>
            <a routerLink="/about">About Us</a>
            <a routerLink="/magazine">Magazine</a>
            <a routerLink="/archives">Archives</a>
          </div>

          <div class="link-col">
            <h5>Editorial</h5>
            <a routerLink="/blogs">Blogs</a>
            <a routerLink="/blogs">Travel</a>
            <a routerLink="/blogs">Culture</a>
            <a routerLink="/blogs">Business</a>
          </div>

          <div class="link-col">
            <h5>Partner</h5>
            <a routerLink="/advertise">Advertise With Us</a>
            <a routerLink="/advertise">Media Kit</a>
            <a routerLink="/contact">Contact</a>
          </div>

          <div class="contact-col">
            <h5>Get In Touch</h5>
            <p>Editorial &amp; Advertising</p>
            <a href="mailto:info@travelbharat.org">info&#64;travelbharat.org</a>
            <a href="tel:+919311134721">+91 9311134721</a>
            <div class="socials">
              <a href="#" aria-label="Instagram" data-testid="social-instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Facebook" data-testid="social-facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="LinkedIn" data-testid="social-linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube" data-testid="social-youtube"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div class="bottom">
          <span>© {{ year }} Travel Bharat. All rights reserved.</span>
          <span>An independent editorial publication.</span>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
}
