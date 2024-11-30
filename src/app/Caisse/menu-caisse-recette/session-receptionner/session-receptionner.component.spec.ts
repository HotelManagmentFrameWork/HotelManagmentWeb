import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionReceptionnerComponent } from './session-receptionner.component';

describe('SessionReceptionnerComponent', () => {
  let component: SessionReceptionnerComponent;
  let fixture: ComponentFixture<SessionReceptionnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionReceptionnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionReceptionnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
