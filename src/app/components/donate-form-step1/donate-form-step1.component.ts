import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheltersService } from '../../services/shelters.service';
import { Shelter } from '../../services/shelter';
import { Contribution } from '../../services/contribution';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate-form-step1',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donate-form-step1.component.html',
  styleUrl: './donate-form-step1.component.scss'
})
export class DonateFormStep1Component {
  @Input() contribution!: Contribution;
  @Output() nextStep = new EventEmitter<Contribution>();
  @Output() wholeFoundationContributionSet = new EventEmitter<boolean>();

  step1Form!: FormGroup;

  wholeFoundationContribution = true;

  amountOptionIndex: number = 4;
  amountOptions: number[] = [5, 10, 20, 30, 50, 100];
  sheltersList: Shelter[] = [];
  sheltersService: SheltersService = inject(SheltersService);

  constructor() {
    this.sheltersService.getShelters().subscribe(data => {
      this.sheltersList = data;
    });
  }

  ngOnInit() {
    this.step1Form = new FormGroup({
      amountInput: new FormControl(''),
      shelter: new FormControl(!!this.contribution.shelterId ? this.contribution.shelterId : '')
    });
  }

  goToNextStep() {
    this.contribution.shelterId = this.isShelterSelected() ? Number(this.step1Form.value.shelter) : undefined;

    if (this.amountOptionIndex !== -1) {
      this.contribution.value = this.amountOptions.at(this.amountOptionIndex);
    }
    else {
      this.contribution.value = Number(this.step1Form.value.amountInput as string);
    }

    this.nextStep.emit(this.contribution);
    this.wholeFoundationContributionSet.emit(this.wholeFoundationContribution);
  }

  selectOption(index: number) {
    this.amountOptionIndex = index;
  }

  selectCustom() {
    this.amountOptionIndex = -1;
  }

  isShelterSelected() {
    return this.step1Form.value.shelter !== '';
  }
}
