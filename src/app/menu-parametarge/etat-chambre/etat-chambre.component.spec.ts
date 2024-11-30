import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatChambreComponent } from './etat-chambre.component';

describe('EtatChambreComponent', () => {
  let component: EtatChambreComponent;
  let fixture: ComponentFixture<EtatChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtatChambreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtatChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
