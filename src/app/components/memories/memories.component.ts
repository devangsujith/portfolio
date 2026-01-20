import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.css'
})
export class MemoriesComponent {
  memories = [
    { year: '2005', title: 'Childhood Days', description: 'Growing up in a small town, learning the basics of curiosity.' },
    { year: '2015', title: 'First Computer', description: 'The spark that ignited the passion for technology.' },
    { year: '2020', title: 'Graduation', description: 'Completed degree with honors and big dreams.' },
    { year: '2023', title: 'First Senior Role', description: 'Leading teams and architecting complex solutions.' }
  ];
}
