import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  ADMINS: Admin[];

  dataSource = new MatTableDataSource<Admin>(this.ADMINS);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'id',
    'username',
    'nom',
    'prenom',
    'email',
    'cin',
    'adresse',
    'telephone',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private adminService: AdminService) {}

  deleteAgent(id: number) {
    this.adminService.delete(id).subscribe(
      (data) => {
        console.log(data);

        this.adminService.findAll().subscribe(
          (data) => {
            this.ADMINS = data;
            this.dataSource = new MatTableDataSource<Admin>(this.ADMINS);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Admin>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.adminService.findAll().subscribe(
      (data) => {
        this.ADMINS = data;
        this.dataSource = new MatTableDataSource<Admin>(this.ADMINS);
      },
      (error) => {
        this.dataSource = new MatTableDataSource<Admin>(null);
      }
    );

    this.dataSource.paginator = this.paginator;
  }
}
