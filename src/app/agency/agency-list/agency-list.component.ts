import { Component, OnInit, ViewChild } from '@angular/core';
import { Agency } from '../model/agency';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AgencyService } from '../service/agency.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css'],
})
export class AgencyListComponent implements OnInit {
  AGENCIES: Agency[];

  dataSource = new MatTableDataSource<Agency>(this.AGENCIES);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'nom',
    'email',
    'fax',
    'adresse',
    'telephone',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private agencyService: AgencyService) {}
  deleteAgency(id: number) {
    this.agencyService.delete(id).subscribe(
      (data) => {
        console.log(data);

        this.agencyService.findAll().subscribe(
          (data) => {
            this.AGENCIES = data;
            this.dataSource = new MatTableDataSource<Agency>(this.AGENCIES);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Agency>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.agencyService.findAll().subscribe(
      (data) => {
        this.AGENCIES = data;

        this.dataSource = new MatTableDataSource<Agency>(this.AGENCIES);
      },
      (error) => {
        this.dataSource = new MatTableDataSource<Agency>(null);
      }
    );

    this.dataSource.paginator = this.paginator;
  }
}
