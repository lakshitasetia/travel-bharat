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
    { name: 'Culture', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80', count: 36 },
    { name: 'Business', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80', count: 28 },
    { name: 'Lifestyle', image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80', count: 24 },
    { name: 'Technology', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80', count: 19 },
    { name: 'Automobiles', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80', count: 15 },
    { name: 'Wellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80', count: 22 },
    { name: 'Hospitality', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', count: 18 }
  ];

  readonly stories: Story[] = [
    {
      slug: 'himalayan-express-katra',
      title: 'The Himalayan Express: A Journey to Katra',
      category: 'Travel',
      excerpt: 'From the plains of Delhi to the foothills of the Trikuta range — an unhurried meditation on India\'s most spirited rail corridor.',
      date: 'January 12, 2026',
      author: 'Aarav Menon',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=1600&q=80',
      body: [
        'There is a particular quality of light that settles over the plains north of Delhi in winter — thin, gold, almost apologetic — and it is in this light that the Vande Bharat Express begins its long, quiet ascent toward the Himalayas.',
        'For eight hours and change, the train unspools through Ambala, Ludhiana, Kathua and Jammu, an itinerary that reads like a litany of Punjab\'s working geography. Fields become foothills; the language on the platform signs shifts from Gurmukhi to Devanagari and, briefly, to Dogri.',
        'By the time you disembark at Shri Mata Vaishno Devi Katra, the air has grown thinner and the pilgrimage has already begun — not on the mountain, but on the tracks.'
      ]
    },
    {
      slug: 'punjab-in-a-thali',
      title: 'Punjab, In A Thali',
      category: 'Culture',
      excerpt: 'The dhabas along the Grand Trunk Road are quietly rewriting what a modern Indian meal can be — with butter, memory and grit.',
      date: 'January 08, 2026',
      author: 'Simran Kaur',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80',
      body: [
        'A thali, at its best, is a landscape. And nowhere in India is the landscape more generous than in Punjab, where a single plate can hold the memory of a harvest, a border, a wedding, and a war.',
        'We travelled the GT Road from Ambala to Amritsar to trace how a new generation of chefs is reimagining these ancestral flavours without erasing them.'
      ]
    },
    {
      slug: 'the-new-indian-railway',
      title: 'The New Indian Railway',
      category: 'Business',
      excerpt: 'How Vande Bharat became the quiet flagship of a country in a hurry — and what its economics reveal about the next decade of Indian mobility.',
      date: 'January 04, 2026',
      author: 'Rohan Bhargava',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80',
      body: [
        'When the first Vande Bharat rolled out of the Integral Coach Factory in 2019, few predicted it would become the most consequential piece of transport infrastructure of the following decade.',
        'Today, with a growing fleet of semi-high-speed sets connecting India\'s major economic nodes, the numbers tell a story of ambition — and of pragmatism.'
      ]
    },
    {
      slug: 'quiet-luxuries-of-udhampur',
      title: 'The Quiet Luxuries of Udhampur',
      category: 'Lifestyle',
      excerpt: 'A weekend retreat on the road less filed — where a young generation of hoteliers is redefining Himalayan hospitality.',
      date: 'December 28, 2025',
      author: 'Ishaan Verma',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=1600&q=80',
      body: ['A slow, considered take on what modern Indian luxury means when it is stripped of gold leaf and left with only stone, wood, wool and time.']
    },
    {
      slug: 'silicon-in-the-sidings',
      title: 'Silicon In The Sidings',
      category: 'Technology',
      excerpt: 'Inside the software revolution that is quietly rebuilding how Indian Railways moves eight billion passengers a year.',
      date: 'December 22, 2025',
      author: 'Anisha Rao',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
      body: ['From predictive maintenance to real-time crew rostering, an unassuming layer of code is changing everything.']
    },
    {
      slug: 'stillness-at-30-degrees',
      title: 'Stillness At Thirty Degrees',
      category: 'Wellness',
      excerpt: 'A rail meditation — why long train journeys remain one of the last acceptable forms of doing absolutely nothing.',
      date: 'December 15, 2025',
      author: 'Meera Iyer',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1600&q=80',
      body: ['On the underrated psychology of the window seat, and what neuroscience is beginning to understand about motion, attention and rest.']
    },
    {
      slug: 'the-return-of-the-grand-hotel',
      title: 'The Return of the Grand Hotel',
      category: 'Hospitality',
      excerpt: 'Across Jammu, Amritsar and Ludhiana, a wave of heritage restorations is reviving the ballroom, the veranda and the long lunch.',
      date: 'December 09, 2025',
      author: 'Karan Deshmukh',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
      body: ['Colonial-era hotels are being rescued from decades of neglect — and, in the process, rewriting the vocabulary of Indian luxury.']
    },
    {
      slug: 'engineering-a-nation',
      title: 'Engineering A Nation',
      category: 'Automobiles',
      excerpt: 'From Chakan to Chennai, a look at the design studios where the next generation of Indian mobility is being drawn.',
      date: 'December 03, 2025',
      author: 'Devika Sharma',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
      body: ['Indian automotive design is having a moment — and it looks nothing like what came before.']
    },
    {
      slug: 'along-the-chenab',
      title: 'Along The Chenab',
      category: 'Travel',
      excerpt: 'The world\'s highest railway bridge is more than an engineering marvel — it is a new grammar for how India moves.',
      date: 'November 26, 2025',
      author: 'Aarav Menon',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1587922546925-b09b18a01c65?w=1600&q=80',
      body: ['A photo essay from the valley that changed Indian civil engineering forever.']
    }
  ];

  readonly issues: Issue[] = [
    { id: 'i-2026-01', number: 'Issue 01', title: 'The Himalayan Journey', date: 'January 2026', year: 2026,
      cover: 'https://images.unsplash.com/photo-1544413660-299165566b1d?w=800&q=80',
      description: 'Katra, Chenab and the quiet grandeur of the northern corridor.' },
    { id: 'i-2025-12', number: 'Issue 12', title: 'A Winter Anthology', date: 'December 2025', year: 2025,
      cover: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
      description: 'Twelve stories from a year on the tracks.' },
    { id: 'i-2025-11', number: 'Issue 11', title: 'The Punjab Portfolio', date: 'November 2025', year: 2025,
      cover: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
      description: 'Food, faith and the Grand Trunk Road.' },
    { id: 'i-2025-10', number: 'Issue 10', title: 'Cities In Motion', date: 'October 2025', year: 2025,
      cover: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
      description: 'How five Indian cities are being rewired for the next decade.' },
    { id: 'i-2025-09', number: 'Issue 09', title: 'The Design Number', date: 'September 2025', year: 2025,
      cover: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=800&q=80',
      description: 'Craft, architecture and the new Indian object.' },
    { id: 'i-2025-08', number: 'Issue 08', title: 'The Monsoon Edition', date: 'August 2025', year: 2025,
      cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
      description: 'A tribute to the season that shapes a subcontinent.' }
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
