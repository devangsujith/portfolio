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

  memories: Memory[] = [
    {
      year: '2013',
      title: 'First flight to USA',
      description: 'I was 6 Months old when I first flew to USA. It was a long flight.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800' }, // Airplane wing
        { type: 'image', url: 'https://images.unsplash.com/photo-1542296332-2e44a996aaad?auto=format&fit=crop&q=80&w=800' }, // Shopping/Luggage
        { type: 'image', url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800' }, // Airport
        { type: 'video', url: 'https://www.youtube.com/embed/y2i-Vj00tG8' }, // Plane landing
        { type: 'video', url: 'https://www.youtube.com/embed/7rX697GqQG0' } // Travel vlog style
      ]
    },
    {
      year: '2014',
      title: 'First Zoo Visit',
      description: 'I visited the Atlanta Zoo. I was very excited to see the animals, especially the lions, tigers, elephants and Pandas',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800' }, // Airplane wing
        { type: 'image', url: 'https://images.unsplash.com/photo-1542296332-2e44a996aaad?auto=format&fit=crop&q=80&w=800' }, // Shopping/Luggage
        { type: 'image', url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800' }, // Airport
        { type: 'video', url: 'https://www.youtube.com/embed/y2i-Vj00tG8' }, // Plane landing
        { type: 'video', url: 'https://www.youtube.com/embed/7rX697GqQG0' } // Travel vlog style
      ]
    },

    {
      year: '2014',
      title: 'First Birthday',
      description: 'I was born on 15th March 2013. This is my first birthday.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?auto=format&fit=crop&q=80&w=800' }, // Birthday Cake
        { type: 'image', url: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800' }, // Party hats
        { type: 'image', url: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?auto=format&fit=crop&q=80&w=800' }, // Balloons
        { type: 'video', url: 'https://www.youtube.com/embed/_z-1fTlSDF0' }, // Happy Birthday song
        { type: 'video', url: 'https://www.youtube.com/embed/S2OdK8c2r7A' } // Kids party
      ]
    },
    {
      year: '2014',
      title: 'First Halloween',
      description: 'I had a great time at my first Halloween party. I dressed up as a monkey',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800' }, // Airplane wing
        { type: 'image', url: 'https://images.unsplash.com/photo-1542296332-2e44a996aaad?auto=format&fit=crop&q=80&w=800' }, // Shopping/Luggage
        { type: 'image', url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800' }, // Airport
        { type: 'video', url: 'https://www.youtube.com/embed/y2i-Vj00tG8' }, // Plane landing
        { type: 'video', url: 'https://www.youtube.com/embed/7rX697GqQG0' } // Travel vlog style
      ]
    },

    {
      year: '2015',
      title: 'First Day of School',
      description: 'I was very excited to go to school for the first time.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' }, // School bus
        { type: 'image', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }, // Classroom
        { type: 'image', url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' }, // Books
        { type: 'video', url: 'https://www.youtube.com/embed/y6a3B27o5T8' }, // School day
        { type: 'video', url: 'https://www.youtube.com/embed/36n93jvjkDs' } // Learning video
      ]
    },
    {
      year: '2018',
      title: 'Visit to Lego Land',
      description: 'I was very excited to go to school for the first time.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' }, // School bus
        { type: 'image', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }, // Classroom
        { type: 'image', url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' }, // Books
        { type: 'video', url: 'https://www.youtube.com/embed/y6a3B27o5T8' }, // School day
        { type: 'video', url: 'https://www.youtube.com/embed/36n93jvjkDs' } // Learning video
      ]
    }
    ,
    {
      year: '2019',
      title: 'First Holi Celebration in USA',
      description: 'I had a great time at my first Holi celebration. I was very excited to play with colors',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' }, // School bus
        { type: 'image', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }, // Classroom
        { type: 'image', url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' }, // Books
        { type: 'video', url: 'https://www.youtube.com/embed/y6a3B27o5T8' }, // School day
        { type: 'video', url: 'https://www.youtube.com/embed/36n93jvjkDs' } // Learning video
      ]
    },

    {
      year: '2019',
      title: 'Taekwondo Days',
      description: 'I had a great time at my first Taekwondo class. I was very excited to learn new moves',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' }, // School bus
        { type: 'image', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }, // Classroom
        { type: 'image', url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' }, // Books
        { type: 'video', url: 'https://www.youtube.com/embed/y6a3B27o5T8' }, // School day
        { type: 'video', url: 'https://www.youtube.com/embed/36n93jvjkDs' } // Learning video
      ]
    },
    {
      year: '2019',
      title: 'Home Depot Activity Days',
      description: 'I had a great time at my first Home Depot Activity Day. I was very excited to learn new things',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' }, // School bus
        { type: 'image', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }, // Classroom
        { type: 'image', url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' }, // Books
        { type: 'video', url: 'https://www.youtube.com/embed/y6a3B27o5T8' }, // School day
        { type: 'video', url: 'https://www.youtube.com/embed/36n93jvjkDs' } // Learning video
      ]
    },
    {
      year: '2019',
      title: 'Boy Scout Days',
      description: 'I had a great time at Boy Scouts. I was very excited to learn new things',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' }, // School bus
        { type: 'image', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }, // Classroom
        { type: 'image', url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' }, // Books
        { type: 'video', url: 'https://www.youtube.com/embed/y6a3B27o5T8' }, // School day
        { type: 'video', url: 'https://www.youtube.com/embed/36n93jvjkDs' } // Learning video
      ]
    },
    {
      year: '2020',
      title: 'First Snow Fall',
      description: 'I had a great time at my first snow fall. I was very excited to play in the snow',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800' }, // School bus
        { type: 'image', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800' }, // Classroom
        { type: 'image', url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' }, // Books
        { type: 'video', url: 'https://www.youtube.com/embed/y6a3B27o5T8' }, // School day
        { type: 'video', url: 'https://www.youtube.com/embed/36n93jvjkDs' } // Learning video
      ]
    },
    {
      year: '2013-2020',
      title: 'Childhood Memories in US ',
      description: 'I had a great unforgettable childhood in USA. I made many friends and memories.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=800' }, // Kids playing
        { type: 'image', url: 'https://images.unsplash.com/photo-1528697203043-733d7c149faf?auto=format&fit=crop&q=80&w=800' }, // US Park
        { type: 'image', url: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&q=80&w=800' }, // Playground
        { type: 'video', url: 'https://www.youtube.com/embed/S948vA66P_0' }, // US Road trip
        { type: 'video', url: 'https://www.youtube.com/embed/9tC7c8zY_zM' } // Disney world
      ]
    },
    {
      year: '2024',
      title: 'My First Bowling',
      description: 'My friends and I went bowling and had a great time.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1534445688536-e04746dd0484?auto=format&fit=crop&q=80&w=800' }, // Bowling pins
        { type: 'image', url: 'https://images.unsplash.com/photo-1519003300449-623992b98211?auto=format&fit=crop&q=80&w=800' }, // Bowling alley
        { type: 'image', url: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=800' }, // Bowling ball
        { type: 'video', url: 'https://www.youtube.com/embed/Bey4XXJAqS8' }, // Perfect game
        { type: 'video', url: 'https://www.youtube.com/embed/hJb1wD2t4lE' } // Fun bowling
      ]
    },
    {
      year: '2025',
      title: 'Boat Trip With my Cousin ',
      description: 'My Cousin and I went on a boat trip and had a great time.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1621683418873-1991bd67d025?auto=format&fit=crop&q=80&w=800' }, // Speedboat
        { type: 'image', url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800' }, // Underwater/Water
        { type: 'image', url: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&q=80&w=800' }, // Tropical water
        { type: 'video', url: 'https://www.youtube.com/embed/eCoDD2R9zM8' }, // Boat ride view
        { type: 'video', url: 'https://www.youtube.com/embed/J7uBbO8r3yI' } // Watersports
      ]
    },
    {
      year: '2025',
      title: 'My First Cruise Trip',
      description: 'My Father and I went on a cruise trip from Mumbai to Kochi and back. It was a great experience.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1548268770-692383c2718e?auto=format&fit=crop&q=80&w=800' }, // Cruise ship
        { type: 'image', url: 'https://images.unsplash.com/photo-1599640845513-5c290847f6eb?auto=format&fit=crop&q=80&w=800' }, // Ocean view
        { type: 'image', url: 'https://images.unsplash.com/photo-1559599238-308793637427?auto=format&fit=crop&q=80&w=800' }, // Ship deck
        { type: 'video', url: 'https://www.youtube.com/embed/z4B7h-6vY9c' }, // Cruise tour
        { type: 'video', url: 'https://www.youtube.com/embed/8JX2yY2z2yI' } // Sunset at sea
      ]
    },
    {
      year: '2025',
      title: 'Trip to Kumarakon',
      description: 'My Father and I went on a trip to Kumarakon Backwaters. It was a great and unforgettable experience.',
      media: [
        { type: 'image', url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800' }, // Kerala Houseboat
        { type: 'image', url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800' }, // Kerala nature
        { type: 'image', url: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800' }, // Palm trees
        { type: 'video', url: 'https://www.youtube.com/embed/t4gjl-9C8H8' }, // Kerala tourism
        { type: 'video', url: 'https://www.youtube.com/embed/R8_d8aN8_y8' } // Houseboat tour
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
