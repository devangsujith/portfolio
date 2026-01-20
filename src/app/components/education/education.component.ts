import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList = [
    { year: '2020', school: 'Tech University', degree: 'Bachelor of Computer Science', description: 'Specialized in Artificial Intelligence and Web Technologies. Graduated with Honors.' },
    { year: '2016', school: 'Elite High School', degree: 'Science Major', description: 'President of the Robotics Club. Won national coding championship.' }
  ];
}
