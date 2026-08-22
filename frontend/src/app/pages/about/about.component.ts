import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  whys = [
    'Premium onboard placement',
    'Highly targeted and affluent readership',
    'Strong brand visibility in a captive environment',
    'High-quality editorial and visual presentation',
    'Pan-India expansion vision through premium rail networks'
  ];
}
