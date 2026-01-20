import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Goal {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  goals = signal<Goal[]>([
    { id: 1, text: 'Learn Angular 19', completed: true },
    { id: 2, text: 'Build a Personal Website', completed: false },
    { id: 3, text: 'Master Signals', completed: false }
  ]);

  completedCount = computed(() => this.goals().filter(g => g.completed).length);
  totalGoals = computed(() => this.goals().length);
  progressPercentage = computed(() => {
    const total = this.totalGoals();
    return total === 0 ? 0 : (this.completedCount() / total) * 100;
  });

  constructor() {
    effect(() => {
      // Example effect: Log progress
      console.log(`Progress: ${this.progressPercentage()}%`);
    });
  }

  addGoal(text: string) {
    if (!text.trim()) return;
    this.goals.update(goals => [
      ...goals,
      { id: Date.now(), text: text.trim(), completed: false }
    ]);
  }

  toggleGoal(id: number) {
    this.goals.update(goals =>
      goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g)
    );
  }

  deleteGoal(id: number) {
    this.goals.update(goals => goals.filter(g => g.id !== id));
  }
}
