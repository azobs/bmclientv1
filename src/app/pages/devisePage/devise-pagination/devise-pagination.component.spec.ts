import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisePaginationComponent } from './devise-pagination.component';

describe('DevisePaginationComponent', () => {
  let component: DevisePaginationComponent;
  let fixture: ComponentFixture<DevisePaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevisePaginationComponent]
    });
    fixture = TestBed.createComponent(DevisePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
