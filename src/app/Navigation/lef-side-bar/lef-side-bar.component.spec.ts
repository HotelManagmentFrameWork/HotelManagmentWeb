import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LefSideBarComponent } from './lef-side-bar.component';

describe('LefSideBarComponent', () => {
  let component: LefSideBarComponent;
  let fixture: ComponentFixture<LefSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LefSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LefSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
