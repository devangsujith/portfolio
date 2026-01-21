import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Media {
  type: 'image' | 'video';
  url: string;
}

interface Memory {
  year: string;
  title: string;
  description: string;
  media: Media[];
}

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.css'
})
export class MemoriesComponent {
  private sanitizer = inject(DomSanitizer);

  // Helper to get random image based on keyword
  private getImg(keyword: string, i: number) {
    return `https://loremflickr.com/800/600/${keyword}?random=${i}`;
  }

  // Known working high-quality travel/nature videos
  private videos = [
    'https://www.youtube.com/embed/LXb3EKWsInQ', // Costa Rica 4K
    'https://www.youtube.com/embed/P6u3jK9qgqI', // Japan 8K
    'https://www.youtube.com/embed/6v2L2UGZJAM', // Norway 4K
    'https://www.youtube.com/embed/ysz5S6PUM-U', // Meadow
    'https://www.youtube.com/embed/xPPLbEFybbQ'  // Drone
  ];

  private getVideo(i: number) {
    return this.videos[i % this.videos.length];
  }

  memories: Memory[] = [
    {
      year: '2013',
      title: 'First flight to USA',
      description: 'I was 6 Months old when I first flew to USA. It was a long flight.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/airplane?random=1' },
        { type: 'image', url: 'https://loremflickr.com/800/600/airport?random=2' },
        { type: 'image', url: 'https://loremflickr.com/800/600/luggage?random=3' },
      ]
    },
    {
      year: '2014',
      title: 'First Zoo Visit',
      description: 'I visited the Atlanta Zoo. I was very excited to see the animals, especially the lions, tigers, elephants and Pandas',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/zoo?random=4' },
        { type: 'image', url: 'https://loremflickr.com/800/600/lion?random=5' },
        { type: 'image', url: 'https://loremflickr.com/800/600/panda?random=6' },
      ]
    },
    {
      year: '2014',
      title: 'First Birthday',
      description: 'I was born on 15th March 2013. This is my first birthday.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/birthday,cake?random=7' },
        { type: 'image', url: 'https://loremflickr.com/800/600/party?random=8' },
        { type: 'image', url: 'https://loremflickr.com/800/600/balloons?random=9' },
        { type: 'video', url: 'https://www.youtube.com/embed/_z-1fTlSDF0' },

      ]
    },
    {
      year: '2014',
      title: 'First Halloween',
      description: 'I had a great time at my first Halloween party. I dressed up as a monkey',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/halloween?random=10' },
        { type: 'image', url: 'https://loremflickr.com/800/600/pumpkin?random=11' },
        { type: 'image', url: 'https://loremflickr.com/800/600/costume?random=12' },
      ]
    },
    {
      year: '2015',
      title: 'First Day of School',
      description: 'I was very excited to go to school for the first time.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/school,bus?random=13' },
        { type: 'image', url: 'https://loremflickr.com/800/600/classroom?random=14' },
        { type: 'image', url: 'https://loremflickr.com/800/600/books?random=15' },
      ]
    },
    {
      year: '2018',
      title: 'Visit to Lego Land',
      description: 'I visited Lego Land and saw amazing lego structures.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/lego?random=16' },
        { type: 'image', url: 'https://loremflickr.com/800/600/themepark?random=17' },
        { type: 'image', url: 'https://loremflickr.com/800/600/toys?random=18' },
      ]
    },
    {
      year: '2019',
      title: 'First Holi Celebration in USA',
      description: 'I had a great time at my first Holi celebration. I was very excited to play with colors',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/color,powder?random=19' },
        { type: 'image', url: 'https://loremflickr.com/800/600/festival?random=20' },
        { type: 'image', url: 'https://loremflickr.com/800/600/celebration?random=21' },

      ]
    },
    {
      year: '2019',
      title: 'Taekwondo Days',
      description: 'I had a great time at my first Taekwondo class. I was very excited to learn new moves',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/taekwondo?random=22' },
        { type: 'image', url: 'https://loremflickr.com/800/600/martialarts?random=23' },
        { type: 'image', url: 'https://loremflickr.com/800/600/sport?random=24' },
      ]
    },
    {
      year: '2019',
      title: 'Home Depot Activity Days',
      description: 'I had a great time at my first Home Depot Activity Day. I was very excited to learn new things',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/tools?random=25' },
        { type: 'image', url: 'https://loremflickr.com/800/600/woodworking?random=26' },
        { type: 'image', url: 'https://loremflickr.com/800/600/workshop?random=27' },
      ]
    },
    {
      year: '2019',
      title: 'Boy Scout Days',
      description: 'I had a great time at Boy Scouts. I was very excited to learn new things',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/camping?random=28' },
        { type: 'image', url: 'https://loremflickr.com/800/600/campfire?random=29' },
        { type: 'image', url: 'https://loremflickr.com/800/600/forest?random=30' },
      ]
    },
    {
      year: '2020',
      title: 'First Snow Fall',
      description: 'I had a great time at my first snow fall. I was very excited to play in the snow',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/snow?random=31' },
        { type: 'image', url: 'https://loremflickr.com/800/600/winter?random=32' },
        { type: 'image', url: 'https://loremflickr.com/800/600/snowman?random=33' },
      ]
    },
    {
      year: '2013-2020',
      title: 'Childhood Memories in US ',
      description: 'I had a great unforgettable childhood in USA. I made many friends and memories.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/playing?random=34' },
        { type: 'image', url: 'https://loremflickr.com/800/600/park?random=35' },
        { type: 'image', url: 'https://loremflickr.com/800/600/playground?random=36' },
        { type: 'video', url: 'https://www.youtube.com/embed/S948vA66P_0' },
      ]
    },
    {
      year: '2024',
      title: 'My First Bowling',
      description: 'My friends and I went bowling and had a great time.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/bowling?random=37' },
        { type: 'image', url: 'https://loremflickr.com/800/600/sport?random=38' },
        { type: 'image', url: 'https://loremflickr.com/800/600/ball?random=39' },
      ]
    },
    {
      year: '2025',
      title: 'Boat Trip With my Cousin ',
      description: 'My Cousin and I went on a boat trip and had a great time.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/boat?random=40' },
        { type: 'image', url: 'https://loremflickr.com/800/600/ocean?random=41' },
        { type: 'image', url: 'https://loremflickr.com/800/600/water?random=42' },

      ]
    },
    {
      year: '2025',
      title: 'My First Cruise Trip',
      description: 'My Father and I went on a cruise trip from Mumbai to Kochi and back. It was a great experience.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/cruise?random=43' },
        { type: 'image', url: 'https://loremflickr.com/800/600/ship?random=44' },
        { type: 'image', url: 'https://loremflickr.com/800/600/sea?random=45' },

      ]
    },
    {
      year: '2025',
      title: 'Trip to Kumarakon',
      description: 'My Father and I went on a trip to Kumarakon Backwaters. It was a great and unforgettable experience.',
      media: [
        { type: 'image', url: 'https://loremflickr.com/800/600/kerala' },
        { type: 'image', url: 'https://loremflickr.com/800/600/houseboat' },
        { type: 'image', url: 'https://loremflickr.com/800/600/nature' },

      ]
    }
  ];

  isModalOpen = false;
  currentMediaIndex = 0;
  activeMemory: Memory | null = null;

  openModal(memory: Memory) {
    this.activeMemory = memory;
    this.currentMediaIndex = 0;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.activeMemory = null;
    document.body.style.overflow = 'auto';
  }

  nextMedia(event: Event) {
    event.stopPropagation();
    if (!this.activeMemory) return;
    this.currentMediaIndex = (this.currentMediaIndex + 1) % this.activeMemory.media.length;
  }

  prevMedia(event: Event) {
    event.stopPropagation();
    if (!this.activeMemory) return;
    this.currentMediaIndex = (this.currentMediaIndex - 1 + this.activeMemory.media.length) % this.activeMemory.media.length;
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
