import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionSessionComponent } from './reception-session.component';

describe('ReceptionSessionComponent', () => {
  let component: ReceptionSessionComponent;
  let fixture: ComponentFixture<ReceptionSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptionSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
