import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  hobbies = [
    { name: 'Photography', icon: '📸', desc: 'Capturing moments in time.' },
    { name: 'Gaming', icon: '🎮', desc: 'Exploring virtual worlds.' },
    { name: 'Music', icon: '🎵', desc: 'Listening and playing guitar.' },
    { name: 'Reading', icon: '📚', desc: 'Continuous learning and sci-fi.' }
  ];
}
