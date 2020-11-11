import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shouyelist1Component } from './shouyelist1.component';

describe('Shouyelist1Component', () => {
  let component: Shouyelist1Component;
  let fixture: ComponentFixture<Shouyelist1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shouyelist1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shouyelist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
