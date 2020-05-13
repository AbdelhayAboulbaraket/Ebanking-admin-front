import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Currency } from '../model/currency';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private currencyUrl: string;
  constructor(private http: HttpClient) {
    this.currencyUrl = 'http://localhost:8081/devises';
  }
  public findAll(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.currencyUrl);
  }

  public save(category: Currency) {
    return this.http.post<Currency>(this.currencyUrl, category);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.currencyUrl}/${id}`);
  }
}
