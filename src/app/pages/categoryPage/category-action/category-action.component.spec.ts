import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryActionComponent } from './category-action.component';

describe('CategoryActionComponent', () => {
  let component: CategoryActionComponent;
  let fixture: ComponentFixture<CategoryActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryActionComponent]
    });
    fixture = TestBed.createComponent(CategoryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
