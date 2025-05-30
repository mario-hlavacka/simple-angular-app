import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contribution } from '../../services/contribution';

@Component({
  selector: 'app-donate-form-step2',
  imports: [ReactiveFormsModule],
  templateUrl: './donate-form-step2.component.html',
  styleUrl: './donate-form-step2.component.scss'
})
export class DonateFormStep2Component {
  @Input() contribution!: Contribution;
  @Output() previousStep = new EventEmitter<Contribution>();
  @Output() nextStep = new EventEmitter<Contribution>();

  step2Form!: FormGroup;

  ngOnInit() {
    this.step2Form = new FormGroup({
      firstName: new FormControl(this.contribution.firstName, Validators.required),
      lastName: new FormControl(this.contribution.lastName, Validators.required),
      email: new FormControl(this.contribution.email, [Validators.required, Validators.email]),  
      phone: new FormControl(this.contribution.phone, [Validators.required, Validators.pattern('^\\d+$')]),
    });
  }

  goToPreviousStep() {
    this.setEnteredContributionValues();

    this.previousStep.emit(this.contribution);
  }

  goToNextStep() {
    this.setEnteredContributionValues();

    this.nextStep.emit(this.contribution);
  }

  setEnteredContributionValues() {
    this.contribution.firstName = this.step2Form.value.firstName as string;
    this.contribution.lastName = this.step2Form.value.lastName as string;
    this.contribution.email = this.step2Form.value.email as string;
    this.contribution.phone = this.step2Form.value.phone as string;
  }
}
