import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TachesComponent } from './taches/taches.component';
import { CreateTachesComponent } from './create-taches/create-taches.component';

const routes: Routes = [
  { path: '', component: TachesComponent},
  { path: 'ajouter-une-taches', component: CreateTachesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
