import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private adminUrl: string;
  constructor(private http: HttpClient) {
    this.adminUrl = 'http://localhost:8081/admins';
  }
  public findAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminUrl);
  }

  public save(agent: Admin) {
    return this.http.post<Admin>(this.adminUrl, agent);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.adminUrl}/${id}`);
  }
}
