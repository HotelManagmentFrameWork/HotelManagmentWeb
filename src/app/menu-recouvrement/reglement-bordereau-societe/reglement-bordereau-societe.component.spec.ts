import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementBordereauSocieteComponent } from './reglement-bordereau-societe.component';

describe('ReglementBordereauSocieteComponent', () => {
  let component: ReglementBordereauSocieteComponent;
  let fixture: ComponentFixture<ReglementBordereauSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReglementBordereauSocieteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglementBordereauSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
