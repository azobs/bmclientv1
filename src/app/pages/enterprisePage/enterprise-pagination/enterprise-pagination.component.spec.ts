import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisePaginationComponent } from './enterprise-pagination.component';

describe('EnterprisePaginationComponent', () => {
  let component: EnterprisePaginationComponent;
  let fixture: ComponentFixture<EnterprisePaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterprisePaginationComponent]
    });
    fixture = TestBed.createComponent(EnterprisePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
