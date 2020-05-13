import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Currency } from '../model/currency';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  CURRENCIES: Currency[];
  dataSource = new MatTableDataSource<Currency>(this.CURRENCIES);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'code',
    'nom',
    'isoCode',
    'alphaCode',
    'creationDate',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private currencyService: CurrencyService) {}

  deleteCurrency(id: string) {
    this.currencyService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.currencyService.findAll().subscribe(
          (data) => {
            this.CURRENCIES = data;
            this.dataSource = new MatTableDataSource<Currency>(this.CURRENCIES);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Currency>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.currencyService.findAll().subscribe(
      (data) => {
        this.CURRENCIES = data;
        console.log(data);
        console.log(this.CURRENCIES);
        this.dataSource = new MatTableDataSource<Currency>(this.CURRENCIES);
      },
      (error) => {
        this.dataSource = new MatTableDataSource<Currency>(null);
      }
    );

    this.dataSource.paginator = this.paginator;
  }
}
