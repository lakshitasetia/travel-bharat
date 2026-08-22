import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentService } from '../../shared/content.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  private route = inject(ActivatedRoute);
  private content = inject(ContentService);
  private params = toSignal(this.route.paramMap, { requireSync: true });

  story = computed(() => {
    const slug = this.params().get('slug') || '';
    return this.content.getStoryBySlug(slug);
  });

  related = computed(() => {
    const s = this.story();
    if (!s) return [];
    return this.content.stories.filter(x => x.slug !== s.slug && x.category === s.category).slice(0, 3);
  });
}
