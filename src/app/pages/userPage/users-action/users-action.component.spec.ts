import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersActionComponent } from './users-action.component';

describe('UsersActionComponent', () => {
  let component: UsersActionComponent;
  let fixture: ComponentFixture<UsersActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersActionComponent]
    });
    fixture = TestBed.createComponent(UsersActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
