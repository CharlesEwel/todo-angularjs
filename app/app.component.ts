import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To Do List</h1>
      <task-list
        [taskList]="tasks"
        [categoryList] = "categories"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [];
  public categories: string[] = [];
  constructor() {
    this.tasks = [
      new Task("Create To-Do List App.", "Work", 1, 0),
      new Task("Learn Kung Fu", "Hobby", 2, 1),
      new Task("Rewatch all LOTR Movies", "Hobby", 1, 2),
      new Task("Do the Laundry", "Home", 3, 3)
    ];
    this.categories = ["Work", "Home", "Hobby", "NightLife"];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
