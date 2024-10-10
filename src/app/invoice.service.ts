import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from './model/invoice';
import { AppConfigService } from './app-config.service';


@Injectable({
  providedIn: 'root',
})
export class InvoiceService {

  private apiUrl: string;  

  constructor(private http: HttpClient, private configService: AppConfigService) {
    this.apiUrl = this.configService.apiUrl;
  }
  
  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiUrl}/invoices`);
  }

  searchInvoices(date: Date, query?: string): Observable<Invoice[]> {

    let params = new HttpParams();

    if (query) {
      params = params.set('query', query);
    }

    if (date) {
      params = params.set('date', date.toDateString());
    }

    return this.http.get<Invoice[]>(`${this.apiUrl}/search`, { params });
  }

}
