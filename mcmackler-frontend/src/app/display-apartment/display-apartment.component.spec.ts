import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayApartmentComponent } from './display-apartment.component';

describe('DisplayApartmentComponent', () => {
  let component: DisplayApartmentComponent;
  let fixture: ComponentFixture<DisplayApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
