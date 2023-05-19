import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTlfComponent } from './modal-tlf.component';

describe('ModalTlfComponent', () => {
  let component: ModalTlfComponent;
  let fixture: ComponentFixture<ModalTlfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTlfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTlfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
