import { Injectable } from '@angular/core';

export interface Story {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  author?: string;
  readTime?: string;
  body?: string[];
}

export interface Issue {
  id: string;
  number: string;
  title: string;
  date: string;
  year: number;
  cover: string;
  description: string;
}

export interface Category {
  name: string;
  image: string;
  count: number;
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  readonly categories: Category[] = [
    { name: 'Travel', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80', count: 42 },
    // { name: 'Culture', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80', count: 36 },
    // { name: 'Business', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80', count: 28 },
    // { name: 'Lifestyle', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80', count: 24 },
    // { name: 'Technology', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80', count: 19 },
    // { name: 'Automobiles', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80', count: 15 },
    // { name: 'Wellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80', count: 22 },
    // { name: 'Hospitality', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', count: 18 }
  ];

  readonly stories: Story[] = [
    {
      slug: 'travel-bharat-rail-magazine',
      title: 'Travel Bharat Rail Magazine',
      category: 'Travel',
      excerpt: '',
      date: 'August 21, 2026',
      image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=1600&q=80',
      body: [
      ]
    }
  ];

  readonly issues: Issue[] = [
    { id: 'i-2026-01', number: 'Issue 01', title: 'Travel Bharat Rail Magazine', date: 'August 2026', year: 2026,
      cover: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=800&q=80',
      description: '' },
    // { id: 'i-2025-12', number: 'Issue 12', title: 'A Winter Anthology', date: 'December 2025', year: 2025,
    //   cover: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    //   description: 'Twelve stories from a year on the tracks.' },
    // { id: 'i-2025-11', number: 'Issue 11', title: 'The Punjab Portfolio', date: 'November 2025', year: 2025,
    //   cover: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    //   description: 'Food, faith and the Grand Trunk Road.' },
    // { id: 'i-2025-10', number: 'Issue 10', title: 'Cities In Motion', date: 'October 2025', year: 2025,
    //   cover: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    //   description: 'How five Indian cities are being rewired for the next decade.' },
    // { id: 'i-2025-09', number: 'Issue 09', title: 'The Design Number', date: 'September 2025', year: 2025,
    //   cover: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80',
    //   description: 'Craft, architecture and the new Indian object.' },
    // { id: 'i-2025-08', number: 'Issue 08', title: 'The Monsoon Edition', date: 'August 2025', year: 2025,
    //   cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    //   description: 'A tribute to the season that shapes a subcontinent.' }
  ];

  getStoryBySlug(slug: string): Story | undefined {
    return this.stories.find(s => s.slug === slug);
  }

  getIssuesByYear(): { year: number; issues: Issue[] }[] {
    const map = new Map<number, Issue[]>();
    this.issues.forEach(i => {
      if (!map.has(i.year)) map.set(i.year, []);
      map.get(i.year)!.push(i);
    });
    return Array.from(map.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([year, issues]) => ({ year, issues }));
  }
}
