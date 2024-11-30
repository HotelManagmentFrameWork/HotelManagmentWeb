import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordereauSocieteComponent } from './bordereau-societe.component';

describe('BordereauSocieteComponent', () => {
  let component: BordereauSocieteComponent;
  let fixture: ComponentFixture<BordereauSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BordereauSocieteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BordereauSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
