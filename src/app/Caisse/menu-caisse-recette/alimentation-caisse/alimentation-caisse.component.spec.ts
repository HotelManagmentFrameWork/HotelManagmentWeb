import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentationCaisseComponent } from './alimentation-caisse.component';

describe('AlimentationCaisseComponent', () => {
  let component: AlimentationCaisseComponent;
  let fixture: ComponentFixture<AlimentationCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlimentationCaisseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentationCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
