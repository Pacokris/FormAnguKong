import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentiteFormComponent } from './component/identite-form/identite-form.component';
import { IdentiteValideComponent } from './component/identite-valide/identite-valide.component';
import { IdentiteInvalideComponent } from './component/identite-invalide/identite-invalide.component';
import {IdentiteLoginComponent} from './component/identite-login/identite-login.component';

const routes: Routes = [
  { path: 'identite-form', component: IdentiteFormComponent },
  { path: 'identite-valide', component: IdentiteValideComponent },
  { path: 'identite-invalide', component: IdentiteInvalideComponent },
  { path: 'identite-login', component: IdentiteLoginComponent},
  { path: '**', component: IdentiteFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
