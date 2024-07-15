import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBusPageComponent } from './selected-bus-page.component';

describe('SelectedBusPageComponent', () => {
  let component: SelectedBusPageComponent;
  let fixture: ComponentFixture<SelectedBusPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedBusPageComponent]
    });
    fixture = TestBed.createComponent(SelectedBusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
