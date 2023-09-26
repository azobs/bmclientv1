import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosListComponent } from './pos-list.component';

describe('PosListComponent', () => {
  let component: PosListComponent;
  let fixture: ComponentFixture<PosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosListComponent]
    });
    fixture = TestBed.createComponent(PosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
