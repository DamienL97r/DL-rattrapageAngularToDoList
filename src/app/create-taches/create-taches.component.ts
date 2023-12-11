import { Component, OnInit } from '@angular/core';
import { TachesService } from '../taches.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ITask } from '../itask';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-taches',
  templateUrl: './create-taches.component.html',
  styleUrls: ['./create-taches.component.css']
})
export class CreateTachesComponent {


  constructor(private taskService: TachesService, private router: Router) {}



  public form:FormGroup = new FormGroup({
    titre: new FormControl(''),
  })

  mockTaches: ITask[] = this.taskService.fetchAll();

  onSubmit() {
    

    const task = this.form.value.titre;
    

    // Créez une nouvelle tache
    const newTask = {
      id: this.mockTaches.length + 1,
      titre: task,
      isChecked: false
    };

    // l'ajouter dans le mock
    this.taskService.addTask(newTask);

    // Réinitialiser le formulaire
    this.form.reset();

    // Redirection vers l'accueil
    this.router.navigate(['/']);
  }
}
