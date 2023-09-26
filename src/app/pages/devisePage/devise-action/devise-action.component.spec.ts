import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviseActionComponent } from './devise-action.component';

describe('DeviseActionComponent', () => {
  let component: DeviseActionComponent;
  let fixture: ComponentFixture<DeviseActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviseActionComponent]
    });
    fixture = TestBed.createComponent(DeviseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
