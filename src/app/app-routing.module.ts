import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentiteFormComponent } from './identite-form/identite-form.component';
import { IdentiteValideComponent } from './identite-valide/identite-valide.component';
import { IdentiteInvalideComponent } from './identite-invalide/identite-invalide.component';
import {IdentiteLoginComponent} from './identite-login/identite-login.component';

const routes: Routes = [
  { path: '', component: IdentiteFormComponent },
  { path: 'identite-form', component: IdentiteFormComponent },
  { path: 'identite-valide', component: IdentiteValideComponent },
  { path: 'identite-invalide', component: IdentiteInvalideComponent },
  { path: 'identite-login', component: IdentiteLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
