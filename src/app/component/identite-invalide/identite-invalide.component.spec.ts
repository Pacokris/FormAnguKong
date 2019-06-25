import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiteInvalideComponent } from './identite-invalide.component';

describe('IdentiteInvalideComponent', () => {
  let component: IdentiteInvalideComponent;
  let fixture: ComponentFixture<IdentiteInvalideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentiteInvalideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiteInvalideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
