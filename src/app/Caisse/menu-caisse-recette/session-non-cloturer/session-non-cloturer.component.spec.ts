import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionNonCloturerComponent } from './session-non-cloturer.component';

describe('SessionNonCloturerComponent', () => {
  let component: SessionNonCloturerComponent;
  let fixture: ComponentFixture<SessionNonCloturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionNonCloturerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionNonCloturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
