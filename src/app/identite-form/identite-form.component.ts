import { Component, OnInit } from '@angular/core';
import { Identite } from '../identite-model/identite';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IdentiteService } from '../identite-service/identite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identite-form',
  templateUrl: './identite-form.component.html',
  styleUrls: ['./identite-form.component.css']
})
export class IdentiteFormComponent implements OnInit {

  model = new Identite(69389, 'CDN', 15121999, 1920845625856, 'string', 'string', 'string', 0, 'string', 'string', 'string',
    'string', 'string', 'string', 'string', 'string', 'string');

  createIdentite: FormGroup;
  submitted = false;
  identiteCree = false;

  constructor(private formBuilder: FormBuilder, private identiteService: IdentiteService, private router: Router) { }

  ngOnInit() {
    this.initialisationForm();
  }

  initialisationForm() {
    this.submitted = false;
    this.identiteCree = false;
    this.createIdentite = this.formBuilder.group({
      raic_service: [false],
      code_lieu_naissance: [69389],
      code_pays_naissance: ['CDN'],
      date_naissance: [15121999],
      num_assure: [1920845625856],
      nom_naissance: ['string'],
      liste_prenoms: ['string'],
      nom_usage: ['string'],
      code_sexe: [0],
      libelle_departement: ['string'],
      libelle_commune: ['string'],
      libelle_pays: ['string'],
      libelle_localite: ['string'],
      nom_marital: ['string'],
      nom_naissance_pere: ['string'],
      liste_prenoms_pere: ['string'],
      nom_naissance_mere: ['string'],
      liste_prenoms_mere: ['string']
    })
  }

  get f() { return this.createIdentite.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.createIdentite.invalid) {
      return;
    }

    const formValue = this.createIdentite.value;
    const newIdentite = new Identite(
      formValue['code_lieu_naissance'],
      formValue['code_pays_naissance'],
      formValue['date_naissance'],
      formValue['num_assure'],
      formValue['nom_naissance'],
      formValue['liste_prenoms'],
      formValue['nom_usage'],
      formValue['code_sexe'],
      formValue['libelle_departement'],
      formValue['libelle_commune'],
      formValue['libelle_pays'],
      formValue['libelle_localite'],
      formValue['nom_marital'],
      formValue['nom_naissance_pere'],
      formValue['liste_prenoms_pere'],
      formValue['nom_naissance_mere'],
      formValue['liste_prenoms_mere']
    );

    this.identiteService.createIdentite(newIdentite)
    .subscribe(data => {
      this.identiteService.identiteConnected = data;
    },

      error => {
        this.submitted = false
      }
    );
}

  relance() {
    this.initialisationForm();
  }
}

