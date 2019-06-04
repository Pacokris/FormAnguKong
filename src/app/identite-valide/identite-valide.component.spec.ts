import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentiteValideComponent } from './identite-valide.component';

describe('IdentiteValideComponent', () => {
  let component: IdentiteValideComponent;
  let fixture: ComponentFixture<IdentiteValideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentiteValideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiteValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
