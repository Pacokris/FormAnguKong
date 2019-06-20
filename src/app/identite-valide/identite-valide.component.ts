import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-identite-valide',
  templateUrl: './identite-valide.component.html',
  styleUrls: ['./identite-valide.component.css']
})
export class IdentiteValideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  returnLastPage() {
    this.router.navigate(['/identite-form']);
  }
}
