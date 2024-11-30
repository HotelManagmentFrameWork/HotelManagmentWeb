import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionReceptionComponent } from './edition-reception.component';

describe('EditionReceptionComponent', () => {
  let component: EditionReceptionComponent;
  let fixture: ComponentFixture<EditionReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditionReceptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
