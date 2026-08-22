import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { ContentService } from '../../shared/content.service';

@Component({
  selector: 'app-magazine',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.scss'
})
export class MagazineComponent {
  private content = inject(ContentService);
  featured = this.content.issues[0];
  recent = this.content.issues.slice(1, 5);
}
