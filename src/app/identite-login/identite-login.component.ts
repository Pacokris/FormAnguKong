import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IdentiteService} from '../identite-service/identite.service';
import {IdentiteLogin} from '../identite-model/identiteLogin';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-identite-login',
  templateUrl: './identite-login.component.html',
  styleUrls: ['./identite-login.component.css']
})
export class IdentiteLoginComponent implements OnInit {

  model = new IdentiteLogin('USG_PN999-test-peam_C3876E65F7AD1A7ADA8190DC38952DAF868346D91F26762812D2307A1747A0E3', 'test');

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private identiteService: IdentiteService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: ['USG_PN999-test-peam_C3876E65F7AD1A7ADA8190DC38952DAF868346D91F26762812D2307A1747A0E3', Validators.required],
      password: ['test', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.identiteService.identiteLogin(this.f.id.value)
      .subscribe(data => {
          this.identiteService.identiteConnected = data;
        },
        error => {
          this.submitted = false;
        }
      );
  }
}
