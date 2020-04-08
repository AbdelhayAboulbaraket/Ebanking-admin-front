import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.css'],
})
export class CurrencyFormComponent {
  currencyForm = new FormGroup({
    Code: new FormControl('', Validators.required),
    Nom: new FormControl('', Validators.required),
    CodeAlpha: new FormControl('', Validators.required),
    CodeIso: new FormControl('', Validators.required),
  });

  get Code() {
    return this.currencyForm.get('Code');
  }

  get Nom() {
    return this.currencyForm.get('Nom');
  }

  get CodeAlpha() {
    return this.currencyForm.get('CodeAlpha');
  }

  get CodeIso() {
    return this.currencyForm.get('CodeIso');
  }

  reset() {
    this.Code.setValue(null);
    this.Nom.setValue(null);
    this.CodeAlpha.setValue(null);
    this.CodeIso.setValue(null);
    this.currencyForm.markAsUntouched();
  }
}
