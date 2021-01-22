import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellDeleteComponent } from './cell-delete.component';

describe('CellDeleteComponent', () => {
  let component: CellDeleteComponent;
  let fixture: ComponentFixture<CellDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
