import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionEnviadaComponent } from './notificacion-enviada.component';

describe('NotificacionEnviadaComponent', () => {
  let component: NotificacionEnviadaComponent;
  let fixture: ComponentFixture<NotificacionEnviadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionEnviadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionEnviadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
