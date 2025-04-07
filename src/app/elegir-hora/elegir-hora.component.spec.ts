import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirHoraComponent } from './elegir-hora.component';

describe('ElegirHoraComponent', () => {
  let component: ElegirHoraComponent;
  let fixture: ComponentFixture<ElegirHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirHoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
