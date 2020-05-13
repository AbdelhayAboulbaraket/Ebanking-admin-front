import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgencyService } from '../service/agency.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Agency } from '../model/agency';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css'],
})
export class AgencyFormComponent implements OnInit {
  agency: Agency;
  agencyForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    fax: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
  });

  get nom() {
    return this.agencyForm.get('nom');
  }

  get adresse() {
    return this.agencyForm.get('adresse');
  }
  get telephone() {
    return this.agencyForm.get('telephone');
  }

  get fax() {
    return this.agencyForm.get('fax');
  }

  get email() {
    return this.agencyForm.get('email');
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agencyService: AgencyService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.agency = this.agencyForm.value;
    this.agencyService
      .save(this.agency)
      .subscribe((result) => this.gotoAgentList());
  }

  gotoAgentList() {
    this.router.navigate(['/agencyList']);
  }

  reset() {
    this.agencyForm.reset();
  }
}
