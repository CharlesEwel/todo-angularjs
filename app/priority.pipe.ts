import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], args){
    var desiredPriorityState = args[0];
    if(desiredPriorityState === "1") {
      return input.filter((task) => {
        return task.priority === 1;
      });
    } else if (desiredPriorityState === "2") {
      return input.filter((task) => {
        return task.priority === 2;
      });
    } else if (desiredPriorityState === "3"){
      return input.filter((task) => {
        return task.priority === 3;
      });
    } else {
      return input;
    }
  }
}
