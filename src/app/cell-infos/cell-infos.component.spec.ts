import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellInfosComponent } from './cell-infos.component';

describe('CellInfosComponent', () => {
  let component: CellInfosComponent;
  let fixture: ComponentFixture<CellInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
