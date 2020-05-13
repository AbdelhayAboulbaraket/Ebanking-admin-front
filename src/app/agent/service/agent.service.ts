import { Injectable } from '@angular/core';
import { Agent } from '../model/agent';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  private agentUrl: string;
  constructor(private http: HttpClient) {
    this.agentUrl = 'http://localhost:8081/agents';
  }
  public findAll(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.agentUrl);
  }

  public save(agent: Agent) {
    return this.http.post<Agent>(this.agentUrl, agent);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.agentUrl}/${id}`);
  }
}
