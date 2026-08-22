import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { ContentService } from '../../shared/content.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  private content = inject(ContentService);
  categories = ['All', 'Travel', 'Culture', 'Business', 'Lifestyle', 'Technology', 'Wellness', 'Hospitality'];
  activeCat = signal('All');
  visibleCount = signal(6);

  featured = this.content.stories[0];
  otherStories = this.content.stories.slice(1);

  filtered = computed(() =>
    this.activeCat() === 'All'
      ? this.otherStories
      : this.otherStories.filter(s => s.category === this.activeCat())
  );

  displayed = computed(() => this.filtered().slice(0, this.visibleCount()));

  setCat(c: string) { this.activeCat.set(c); this.visibleCount.set(6); }
  loadMore() { this.visibleCount.update(v => v + 6); }
  hasMore = computed(() => this.filtered().length > this.visibleCount());
}
