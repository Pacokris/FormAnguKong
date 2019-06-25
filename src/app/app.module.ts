import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdentiteFormComponent } from './component/identite-form/identite-form.component';
import { IdentiteInvalideComponent } from './component/identite-invalide/identite-invalide.component';
import { IdentiteLoginComponent } from './component/identite-login/identite-login.component';
import { IdentiteValideComponent } from './component/identite-valide/identite-valide.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentiteFormComponent,
    IdentiteValideComponent,
    IdentiteInvalideComponent,
    IdentiteLoginComponent,
    HomeComponent,
    LoginComponent
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
