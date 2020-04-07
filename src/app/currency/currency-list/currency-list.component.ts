import { Component, OnInit } from '@angular/core';

export interface currency {
  code: string;
  nom: string;
  codeIso: string;
  codeAlpha: number;
  dateCreation: Date;
}
const CURRENCIES: currency[] = [
  {
    code: 'USD',
    nom: 'DOLLAR DES ETATS UNIS',
    codeIso: 'USD',
    codeAlpha: 840,
    dateCreation: new Date(),
  },
  {
    code: 'JPY',
    nom: 'YEN',
    codeIso: 'JPY',
    codeAlpha: 392,
    dateCreation: new Date(),
  },
  {
    code: 'MAD',
    nom: 'DIRHAM MAROCAIN',
    codeIso: 'MAD',
    codeAlpha: 504,
    dateCreation: new Date(),
  },
];

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  displayedColumns: string[] = [
    'code',
    'nom',
    'codeIso',
    'codeAlpha',
    'dateCreation',
  ];
  dataSource = CURRENCIES;
  constructor() {}

  ngOnInit(): void {}
}
