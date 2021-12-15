import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesCapitulosComponent } from './personajes-capitulos.component';

describe('PersonajesCapitulosComponent', () => {
  let component: PersonajesCapitulosComponent;
  let fixture: ComponentFixture<PersonajesCapitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesCapitulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesCapitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
