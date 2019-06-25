import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IdentiteFormComponent } from './component/identite-form/identite-form.component';
import { IdentiteValideComponent } from './component/identite-valide/identite-valide.component';
import { IdentiteInvalideComponent } from './component/identite-invalide/identite-invalide.component';
import { IdentiteLoginComponent } from './component/identite-login/identite-login.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentiteFormComponent,
    IdentiteValideComponent,
    IdentiteInvalideComponent,
    IdentiteLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
