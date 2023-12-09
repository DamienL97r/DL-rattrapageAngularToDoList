import { Component } from '@angular/core';
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

  mockTaches: ITask[] = [];

  onSubmit() {
    

    const task = this.form.value.titre;
    console.log(task);
    

    // Créez une nouvelle tache
    const newTask = {
      id: this.mockTaches.length + 1, // Génére un nouvel ID
      titre: task,
    };

    this.mockTaches.push(newTask);

    this.taskService.addTask(newTask);

    this.mockTaches = this.taskService.fetchAll();


    console.log(newTask);
    console.log(this.mockTaches);
    


    // Réinitialiser le formulaire
    this.form.reset();

    // Redirection vers l'accueil
    this.router.navigate(['/']);
  }
}
