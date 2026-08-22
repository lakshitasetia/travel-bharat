import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-advertise',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './advertise.component.html',
  styleUrl: './advertise.component.scss'
})
export class AdvertiseComponent {
  route = [
    { name: 'New Delhi', short: 'NDLS' },
    { name: 'Ambala Cantt', short: 'UMB' },
    { name: 'Ludhiana', short: 'LDH' },
    { name: 'Kathua', short: 'KTHU' },
    { name: 'Jammu Tawi', short: 'JAT' },
    { name: 'Udhampur', short: 'UHP' },
    { name: 'Mata Vaishno Devi Katra', short: 'SVDK' }
  ];
  audience = [
    'Business Leaders', 'Corporate Executives', 'Entrepreneurs', 'Government Officials',
    'Professionals', 'Students', 'Domestic & International Tourists',
    'NRI Travellers', 'Affluent Families'
  ];
  reasons = [
    { title: 'Captive & Engaged Audience', copy: 'Unlike digital advertisements that can be skipped or ignored, onboard readers spend quality time with the magazine throughout their journey.' },
    { title: 'Premium Passenger Profile', copy: 'Reach affluent, decision-making readers — from business leaders and professionals to international tourists and NRI travellers.' },
    { title: 'High Brand Recall', copy: 'Limited advertising clutter ensures stronger visibility, deeper engagement, and lasting brand retention.' },
    { title: 'Strategic Market Reach', copy: 'Connect with audiences across major commercial, industrial, educational and tourism destinations.' },
    { title: 'Trusted Environment', copy: 'Association with India\'s premium Vande Bharat services enhances brand credibility and consumer trust.' },
    { title: 'Bilingual Advantage', copy: 'Communicate effectively with both English and Hindi-speaking audiences.' }
  ];
  categories = [
    'Tourism & Hospitality', 'Airlines & Travel Services', 'Hotels & Resorts',
    'Education & Overseas Studies', 'Universities & Skill Development',
    'Healthcare & Hospitals', 'Real Estate & Infrastructure',
    'Banking & Financial Services', 'Automobiles', 'FMCG & Consumer Brands',
    'Technology & Electronics', 'Luxury Products', 'Government & Public Sector Campaigns'
  ];
}
