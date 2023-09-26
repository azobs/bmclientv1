import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseActionComponent } from './enterprise-action.component';

describe('EnterpriseActionComponent', () => {
  let component: EnterpriseActionComponent;
  let fixture: ComponentFixture<EnterpriseActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseActionComponent]
    });
    fixture = TestBed.createComponent(EnterpriseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
