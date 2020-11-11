import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlist1Component } from './productlist1.component';

describe('Productlist1Component', () => {
  let component: Productlist1Component;
  let fixture: ComponentFixture<Productlist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productlist1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productlist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
