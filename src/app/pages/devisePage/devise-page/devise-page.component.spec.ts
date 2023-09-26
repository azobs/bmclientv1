import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisePageComponent } from './devise-page.component';

describe('DevisePageComponent', () => {
  let component: DevisePageComponent;
  let fixture: ComponentFixture<DevisePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevisePageComponent]
    });
    fixture = TestBed.createComponent(DevisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
