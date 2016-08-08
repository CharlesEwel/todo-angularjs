import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import {NewTaskComponent} from './new-task.component';
import {DonePipe} from './done.pipe';
import {PriorityPipe} from './priority.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList', 'categoryList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe, PriorityPipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  templateUrl: 'app/task-list.component.html'
})
export class TaskListComponent {
  public filterDone: string = "notDone";
  public filterPriority: number = 3;
  public taskList: Task[];
  public categoryList: string[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(description: string, category: string, priority: number): void {
    this.taskList.push(
      new Task(description, category, priority, this.taskList.length)
    );
  }
  createCategory(categoryName: string) {
    this.categoryList.push(categoryName);
  }
  onDoneChange(filterOption) {
    this.filterDone = filterOption;
    console.log(this.filterDone);
  }
  onPriorityChange(filterOption) {
    this.filterPriority = filterOption;
    console.log(this.filterPriority);
  }
}
