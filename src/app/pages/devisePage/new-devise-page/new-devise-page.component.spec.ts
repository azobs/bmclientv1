import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDevisePageComponent } from './new-devise-page.component';

describe('NewDevisePageComponent', () => {
  let component: NewDevisePageComponent;
  let fixture: ComponentFixture<NewDevisePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDevisePageComponent]
    });
    fixture = TestBed.createComponent(NewDevisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
