import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'new-category',
  outputs: ['onSubmitNewCategory'],
  template: `
    <div class="category-form">
      <h3>Create Category:</h3>
      <input placeholder="Category" class="col-sm-8 input-lg" #newCategory>
      <button (click)="addCategory(newCategory)" class="add-button btn-lg">Add</button>
  `
})
export class NewCategoryComponent {
  public onSubmitNewCategory: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewCategory = new EventEmitter();
  }
  addCategory(userCategory: HTMLInputElement){
    var emission = [];
    emission.push(userCategory.value);
    this.onSubmitNewCategory.emit(emission);
    userCategory.value = "";
  }
}
