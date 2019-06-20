import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-identite-invalide',
  templateUrl: './identite-invalide.component.html',
  styleUrls: ['./identite-invalide.component.css']
})
export class IdentiteInvalideComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnLastPage() {
    this.router.navigate(['/identite-form']);
  }
}
