import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCloturerComponent } from './session-cloturer.component';

describe('SessionCloturerComponent', () => {
  let component: SessionCloturerComponent;
  let fixture: ComponentFixture<SessionCloturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionCloturerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionCloturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
