import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFormStep1Component } from './donate-form-step1.component';

describe('DonateFormStep1Component', () => {
  let component: DonateFormStep1Component;
  let fixture: ComponentFixture<DonateFormStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateFormStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateFormStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
