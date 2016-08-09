import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  inputs: ['categoryList'],
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Create Task:</h3>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <select class="input-lg" #newCategory>
        <option *ngFor="#currentCategory of categoryList">{{currentCategory}}</option>
      </select>
      <select class="input-lg" #newPriority>
        <option value='1'>High Priority</option>
        <option value='2'>Medium Priority</option>
        <option value='3'>Low Priority</option>
      </select>
      <button (click)="addTask(newDescription, newCategory, newPriority)" class="add-button btn-lg">Add</button>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userCategory: HTMLInputElement, userPriority: HTMLInputElement){
    var emission = [];
    emission.push(userDescription.value);
    emission.push(userCategory.value);
    emission.push(userPriority.value);
    this.onSubmitNewTask.emit(emission);
    userDescription.value = "";
  }
}
