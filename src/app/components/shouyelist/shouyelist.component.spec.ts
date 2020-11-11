import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouyelistComponent } from './shouyelist.component';

describe('ShouyelistComponent', () => {
  let component: ShouyelistComponent;
  let fixture: ComponentFixture<ShouyelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShouyelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouyelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
