import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MemoriesComponent } from './components/memories/memories.component';
import { EducationComponent } from './components/education/education.component';
import { AdventuresComponent } from './components/adventures/adventures.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    MemoriesComponent,
    EducationComponent,
    AdventuresComponent,
    HobbiesComponent,
    TodoComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Devang Sujith';

  currentYear = new Date().getFullYear();

  isMobileMenuOpen = false;

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMobileMenuOpen = false;
    }
  }
}
