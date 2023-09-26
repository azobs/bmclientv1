import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnterprisePageComponent } from './new-enterprise-page.component';

describe('NewEnterprisePageComponent', () => {
  let component: NewEnterprisePageComponent;
  let fixture: ComponentFixture<NewEnterprisePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEnterprisePageComponent]
    });
    fixture = TestBed.createComponent(NewEnterprisePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
