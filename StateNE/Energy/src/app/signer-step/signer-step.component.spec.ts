import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignerStepComponent } from './signer-step.component';

describe('SignerStepComponent', () => {
  let component: SignerStepComponent;
  let fixture: ComponentFixture<SignerStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignerStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignerStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
