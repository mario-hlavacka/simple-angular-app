import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFormStep2Component } from './donate-form-step2.component';

describe('DonateFormStep2Component', () => {
  let component: DonateFormStep2Component;
  let fixture: ComponentFixture<DonateFormStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonateFormStep2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateFormStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
