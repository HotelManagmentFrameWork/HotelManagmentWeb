import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCaisseRecetteComponent } from './menu-caisse-recette.component';

describe('MenuCaisseRecetteComponent', () => {
  let component: MenuCaisseRecetteComponent;
  let fixture: ComponentFixture<MenuCaisseRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuCaisseRecetteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCaisseRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
