import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonateFormStep1Component } from "../donate-form-step1/donate-form-step1.component";
import { DonateFormStep2Component } from '../donate-form-step2/donate-form-step2.component';
import { DonateFormStep3Component } from '../donate-form-step3/donate-form-step3.component';
import { ContributionsService } from '../../services/contributions.service';
import { Contribution } from '../../services/contribution';

@Component({
  selector: 'app-donate-form',
  imports: [CommonModule, DonateFormStep1Component, DonateFormStep2Component, DonateFormStep3Component],
  templateUrl: './donate-form.component.html',
  styleUrl: './donate-form.component.scss'
})
export class DonateFormComponent {
  contributionsService: ContributionsService = inject(ContributionsService);

  contribution: Contribution = {};
  wholeFoundationContribution: boolean = true;

  currentStep: number = 1;

  nextStep(contribution: Contribution) {
    this.contribution = contribution;

    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(contribution: Contribution) {
    this.contribution = contribution;

    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  submitForm() {
    this.contributionsService.submitContribution(this.contribution).subscribe({
      next: () => console.log('Contribution added'),
      error: (err) => console.error('Error:', err)
    });
  }

  wholeFoundationContributionSet(wholeFoundationContribution: boolean) {
    this.wholeFoundationContribution = wholeFoundationContribution;
  }
}
