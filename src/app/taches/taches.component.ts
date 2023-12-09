import { Component, OnInit } from '@angular/core';
import { TachesService } from '../taches.service';
import { ITask } from '../itask';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  constructor(private taskService: TachesService) {}

  tasks: ITask[] = [];

  ngOnInit(): void {
    this.tasks = this.taskService.fetchAll();
  }

}
