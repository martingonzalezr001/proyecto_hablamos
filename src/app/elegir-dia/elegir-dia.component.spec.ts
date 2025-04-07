import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirDiaComponent } from './elegir-dia.component';

describe('ElegirDiaComponent', () => {
  let component: ElegirDiaComponent;
  let fixture: ComponentFixture<ElegirDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirDiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
