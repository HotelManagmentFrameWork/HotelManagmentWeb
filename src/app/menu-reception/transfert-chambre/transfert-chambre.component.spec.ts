import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertChambreComponent } from './transfert-chambre.component';

describe('TransfertChambreComponent', () => {
  let component: TransfertChambreComponent;
  let fixture: ComponentFixture<TransfertChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransfertChambreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfertChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
