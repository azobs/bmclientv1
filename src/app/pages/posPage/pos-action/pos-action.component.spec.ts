import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosActionComponent } from './pos-action.component';

describe('PosActionComponent', () => {
  let component: PosActionComponent;
  let fixture: ComponentFixture<PosActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosActionComponent]
    });
    fixture = TestBed.createComponent(PosActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
