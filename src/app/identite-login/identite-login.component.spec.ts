import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiteLoginComponent } from './identite-login.component';

describe('IdentiteLoginComponent', () => {
  let component: IdentiteLoginComponent;
  let fixture: ComponentFixture<IdentiteLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentiteLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiteLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
