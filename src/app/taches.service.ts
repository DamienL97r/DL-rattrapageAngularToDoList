import { Injectable } from '@angular/core';
import { mockTaches } from './mock-taches';
import { ITask } from './itask';


@Injectable({
  providedIn: 'root'
})
export class TachesService {

  toDoList: ITask[] = mockTaches;

  constructor() { }

  //Lire tous les points de la to do list
  fetchAll() {
    return this.toDoList;
  }

  addTask(newTask: any) {

    // Push la nouvelle task dans le tableau toDoList
    this.toDoList.push(newTask);
  }
}
