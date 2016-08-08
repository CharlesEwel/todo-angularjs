export class Task {
  public done: boolean = false;
  constructor(public description: string, public category: string, public priority: number, public id: number){}
}
