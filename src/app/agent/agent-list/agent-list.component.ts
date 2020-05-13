import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Agent } from '../model/agent';
import { AgentService } from '../service/agent.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
})
export class AgentListComponent implements OnInit {
  AGENTS: Agent[];

  dataSource = new MatTableDataSource<Agent>(this.AGENTS);
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
    'agence',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private agentService: AgentService) {}

  deleteAgent(id: number) {
    this.agentService.delete(id).subscribe(
      (data) => {
        console.log(data);

        this.agentService.findAll().subscribe(
          (data) => {
            this.AGENTS = data;
            this.dataSource = new MatTableDataSource<Agent>(this.AGENTS);
          },
          (error) => {
            this.dataSource = new MatTableDataSource<Agent>(null);
          }
        );
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.agentService.findAll().subscribe(
      (data) => {
        this.AGENTS = data;
        this.dataSource = new MatTableDataSource<Agent>(this.AGENTS);
      },
      (error) => {
        this.dataSource = new MatTableDataSource<Agent>(null);
      }
    );

    this.dataSource.paginator = this.paginator;
  }
}
