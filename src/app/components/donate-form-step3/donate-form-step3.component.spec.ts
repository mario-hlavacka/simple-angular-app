import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFormStep3Component } from './donate-form-step3.component';

describe('DonateFormStep3Component', () => {
  let component: DonateFormStep3Component;
  let fixture: ComponentFixture<DonateFormStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateFormStep3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateFormStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
