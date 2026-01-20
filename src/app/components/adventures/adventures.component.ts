import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adventures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adventures.component.html',
  styleUrl: './adventures.component.css'
})
export class AdventuresComponent {
  categories = ['All', 'Nature', 'Urban', 'Trekking'];
  activeFilter = signal('All');

  allAdventures = [
    { id: 1, title: 'Mountain Hiking', category: 'Nature', description: 'Explored the misty peaks of the Northern Alps.', color: '#2E7D32' },
    { id: 2, title: 'City Lights', category: 'Urban', description: 'Night walk through the neon streets of Tokyo.', color: '#311B92' },
    { id: 3, title: 'Forest Camp', category: 'Trekking', description: '3-day survival camp deep in the woods.', color: '#558B2F' },
    { id: 4, title: 'Beach Sunset', category: 'Nature', description: 'Reviewing life goals by the ocean.', color: '#0277BD' },
    { id: 5, title: 'Museum Tour', category: 'Urban', description: 'Appreciating history and modern art.', color: '#455A64' },
  ];

  filteredAdventures = signal(this.allAdventures);

  constructor() {
    // Initial filter logic is handled by the computed or simple method call/update
    // But since I used a signal for filteredAdventures, I should update it when filter changes.
    // Or make filteredAdventures a computed signal.
  }

  // Using a method to update state for simplicity, or could use computed if activeFilter was the only dependency
  setFilter(filter: string) {
    this.activeFilter.set(filter);
    if (filter === 'All') {
      this.filteredAdventures.set(this.allAdventures);
    } else {
      this.filteredAdventures.set(this.allAdventures.filter(a => a.category === filter));
    }
  }
}
