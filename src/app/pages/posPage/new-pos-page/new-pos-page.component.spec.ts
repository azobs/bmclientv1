import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPosPageComponent } from './new-pos-page.component';

describe('NewPosPageComponent', () => {
  let component: NewPosPageComponent;
  let fixture: ComponentFixture<NewPosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPosPageComponent]
    });
    fixture = TestBed.createComponent(NewPosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
