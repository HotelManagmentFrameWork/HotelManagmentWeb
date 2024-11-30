import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuParametargeComponent } from './menu-parametarge.component';

describe('MenuParametargeComponent', () => {
  let component: MenuParametargeComponent;
  let fixture: ComponentFixture<MenuParametargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuParametargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuParametargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
