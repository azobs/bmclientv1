import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPaginationComponent } from './category-pagination.component';

describe('CategoryPaginationComponent', () => {
  let component: CategoryPaginationComponent;
  let fixture: ComponentFixture<CategoryPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryPaginationComponent]
    });
    fixture = TestBed.createComponent(CategoryPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
