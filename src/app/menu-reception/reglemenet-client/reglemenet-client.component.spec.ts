import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglemenetClientComponent } from './reglemenet-client.component';

describe('ReglemenetClientComponent', () => {
  let component: ReglemenetClientComponent;
  let fixture: ComponentFixture<ReglemenetClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReglemenetClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglemenetClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
