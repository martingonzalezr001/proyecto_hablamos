import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAjenoPruebaComponent } from './perfil-ajeno-prueba.component';

describe('PerfilAjenoPruebaComponent', () => {
  let component: PerfilAjenoPruebaComponent;
  let fixture: ComponentFixture<PerfilAjenoPruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAjenoPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilAjenoPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
