import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    const url = "https://bootcamp-santander-guilherme.herokuapp.com/bootcamp/stock"
    return this.http.get<Stock[]>(url).toPromise();
  }
}
