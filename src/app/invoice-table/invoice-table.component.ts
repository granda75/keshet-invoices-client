import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { MatTableDataSource } from '@angular/material/table';
import { Invoice } from '../model/invoice';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})
export class InvoiceTableComponent implements OnInit {

  @Input() searchDate!: Date;
  @Input() searchText!: string;
  @Output() pdfUrlSelected: EventEmitter<string> = new EventEmitter<string>();
  dataSource = new MatTableDataSource<Invoice>();

  displayedColumns: string[] = ['invoiceStatus', 'invoiceName',  'supplierName', 'totalAmount'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pdfUrl!: string;
  selectedRow: any;  // Track the selected row

  constructor(private invoiceService: InvoiceService) {

  }


  ngOnInit(): void {
   
    this.getInvoices();
  }

  ngOnChanges() {
     this.invoiceService.searchInvoices(this.searchDate, this.searchText)
        .pipe(untilDestroyed(this))
        .subscribe(data => {
            this.dataSource.data = data;
      })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getInvoices(): void {
    this.invoiceService.getInvoices().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  onRowSelected(row: any): void {
    this.selectedRow = row;  
    row.pdfUrl = 'assets/docs/media_company_invoice.pdf';
    this.pdfUrlSelected.emit(row.pdfUrl);
  }

  onPdfUrlSelected(pdfUrl: string): void {
      this.pdfUrl = pdfUrl;  
    }

}
