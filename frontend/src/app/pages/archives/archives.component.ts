import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../shared/content.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-archives',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.scss'
})
export class ArchivesComponent {
  private content = inject(ContentService);
  years = this.content.getIssuesByYear();
}
