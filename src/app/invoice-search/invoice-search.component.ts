import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Invoice } from '../model/invoice';
import { InvoiceService } from '../invoice.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { InvoiceSearchField } from '../model/invoice-search-field';


@UntilDestroy()
@Component({
  selector: 'app-invoice-search',
  templateUrl: './invoice-search.component.html',
  styleUrls: ['./invoice-search.component.scss']
})
export class InvoiceSearchComponent implements OnInit {

  @Output() pdfUrlSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchFieldsSelected: EventEmitter<InvoiceSearchField> = new EventEmitter<InvoiceSearchField>();
    

  invoiceSearchForm!: FormGroup;
  searchText: string = "";
  selectedDate: Date | null = null;

  invoices: Invoice[] = [];
  displayedColumns: string[] = ['invoiceNumber', 'invoiceName', 'supplierName', 'invoiceDate'];
  isListView: boolean = true;
  selectedInvoice: Invoice | null = null;
  dataSource = new MatTableDataSource<Invoice>();
  pdfUrl: string = "";

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private invoiceService: InvoiceService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    
    this.buildForm();
    this.getInvoices();
  }

  private buildForm() {
    this.invoiceSearchForm = this.formBuilder.group({
      queryText: ['', Validators.required],
      selectedDate: [null]
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSearch(): void {
    const queryText = this.invoiceSearchForm.get('queryText')?.value;
    const date = this.invoiceSearchForm.get('selectedDate')?.value;

    var invoiceSearchField = new InvoiceSearchField();
    invoiceSearchField.searchText = queryText;
    invoiceSearchField.searchDate = date;
   
    this.searchFieldsSelected.emit(invoiceSearchField);
   
  }
  
  getInvoices(): void {
    this.invoiceService.getInvoices()
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }

  
  toggleView(invoice: Invoice | null): void {
    this.selectedInvoice = invoice;
    this.isListView = !this.isListView;
  }

  onRowSelected(row: any): void {
    row.pdfUrl = 'assets/docs/media_company_invoice.pdf';
    this.pdfUrlSelected.emit(row.pdfUrl);
  }

  
}
