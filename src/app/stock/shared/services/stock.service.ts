import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockList } from "../modal/stock-list";
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient: HttpClient) { }

  getStockList(): Observable<StockList[]> {
    return this.httpClient.get<StockList[]>('/assets/stock-app/modal/stock.json');
  }

}
