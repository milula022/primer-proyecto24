import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesDeAbajoComponent } from './partes-de-abajo.component';

describe('PartesDeAbajoComponent', () => {
  let component: PartesDeAbajoComponent;
  let fixture: ComponentFixture<PartesDeAbajoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartesDeAbajoComponent]
    });
    fixture = TestBed.createComponent(PartesDeAbajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
