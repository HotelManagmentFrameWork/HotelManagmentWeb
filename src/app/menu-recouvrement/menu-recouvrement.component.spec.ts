import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRecouvrementComponent } from './menu-recouvrement.component';

describe('MenuRecouvrementComponent', () => {
  let component: MenuRecouvrementComponent;
  let fixture: ComponentFixture<MenuRecouvrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuRecouvrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRecouvrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
