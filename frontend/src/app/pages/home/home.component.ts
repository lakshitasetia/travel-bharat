import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../shared/content.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private content = inject(ContentService);
  categories = this.content.categories;
  latestStories = this.content.stories.slice(0, 6);
  featuredIssue = this.content.issues[0];
  whys = [
    { n: '01', title: 'Premium Onboard Placement', copy: 'Distributed inside India\'s most prestigious semi high-speed services — where readers spend hours with the page.' },
    { n: '02', title: 'Highly Targeted Readership', copy: 'Business travellers, executives, entrepreneurs, tourists and NRI visitors — a captive, high-value audience.' },
    { n: '03', title: 'Strong Brand Visibility', copy: 'Uncluttered editorial environment. Every campaign gets deliberate, considered attention.' },
    { n: '04', title: 'High-Quality Editorial Presentation', copy: 'Long-form journalism, cinematic photography, meticulous art direction — a home for premium brands.' },
    { n: '05', title: 'Pan-India Expansion Vision', copy: 'Scaling across the growing Vande Bharat network — a national platform, one corridor at a time.' }
  ];
}
