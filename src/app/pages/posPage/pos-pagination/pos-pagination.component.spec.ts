import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosPaginationComponent } from './pos-pagination.component';

describe('PosPaginationComponent', () => {
  let component: PosPaginationComponent;
  let fixture: ComponentFixture<PosPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosPaginationComponent]
    });
    fixture = TestBed.createComponent(PosPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
