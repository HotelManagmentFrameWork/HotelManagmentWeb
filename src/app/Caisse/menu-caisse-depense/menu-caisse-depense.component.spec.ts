import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCaisseDepenseComponent } from './menu-caisse-depense.component';

describe('MenuCaisseDepenseComponent', () => {
  let component: MenuCaisseDepenseComponent;
  let fixture: ComponentFixture<MenuCaisseDepenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuCaisseDepenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCaisseDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
