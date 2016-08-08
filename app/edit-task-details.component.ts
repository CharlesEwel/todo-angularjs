import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task', 'categoryList'],
  template: `
  <div class="task-form">
    <h3>Edit Description:</h3>
    <input [(ngModel)]="task.description" class="col-sm-8 input-lg"/>
    <h3>Edit Category:</h3>
    <select class="input-lg" [(ngModel)]="task.category">
      <option *ngFor="#currentCategory of categoryList">{{currentCategory}}</option>
    </select>
    <h3>Edit Priority:</h3>
    <select class="input-lg" [(ngModel)]="task.priority">
      <option value='1'>High Priority</option>
      <option value='2'>Medium Priority</option>
      <option value='3'>Low Priority</option>
    </select>
  </div>
  `
})

export class EditTaskDetailsComponent {
  public task: Task;
}
