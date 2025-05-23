import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Contribution } from '../contribution';
import { SheltersService } from '../shelters.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate-form-step3',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donate-form-step3.component.html',
  styleUrl: './donate-form-step3.component.scss'
})
export class DonateFormStep3Component {
  @Input() contribution: Contribution = {};
  @Input() wholeFoundationContribution: boolean = true;
  @Output() previousStep = new EventEmitter<Contribution>();
  @Output() submitForm = new EventEmitter<void>();

  step3Form = new FormGroup({
    accepted: new FormControl(false, Validators.requiredTrue),
  });

  sheltersService: SheltersService = inject(SheltersService);
  preferedShelterName: string = '';

  ngOnInit() {
    if(!!this.contribution.shelterId) {
      this.sheltersService.getShelterById(this.contribution.shelterId).subscribe(data => {
        this.preferedShelterName = data.name;
      });
    }
  }

  goToPreviousStep() {
    this.previousStep.emit(this.contribution);
  }

  processForm() {
    this.submitForm.emit();
  }
}
