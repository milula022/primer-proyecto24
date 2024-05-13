import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartesDeArribaComponent } from './partes-de-arriba.component';

describe('PartesDeArribaComponent', () => {
  let component: PartesDeArribaComponent;
  let fixture: ComponentFixture<PartesDeArribaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartesDeArribaComponent]
    });
    fixture = TestBed.createComponent(PartesDeArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
