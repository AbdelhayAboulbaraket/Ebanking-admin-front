import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agency } from '../model/agency';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AgencyService {
  private agencyUrl: string;
  constructor(private http: HttpClient) {
    this.agencyUrl = 'http://localhost:8081/agences';
  }
  public findAll(): Observable<Agency[]> {
    return this.http.get<Agency[]>(this.agencyUrl);
  }

  public save(agent: Agency) {
    return this.http.post<Agency>(this.agencyUrl, agent);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.agencyUrl}/${id}`);
  }
}
