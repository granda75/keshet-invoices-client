import { Component } from '@angular/core';
import { InvoiceSearchField } from '../model/invoice-search-field';

@Component({
  selector: 'app-invoice-complex-view',
  templateUrl: './invoice-complex-view.component.html',
  styleUrls: ['./invoice-complex-view.component.scss']
})
export class InvoiceComplexViewComponent {
  
  invoicePreviewVisible: boolean = false;
  pdfUrl!: string;
  searchText!: string;
  selectedDate!: Date;

  toggleView(): void {
    this.invoicePreviewVisible = !this.invoicePreviewVisible;
  }

  onPdfUrlSelected(pdfUrl: string): void {
    this.pdfUrl = pdfUrl;  
  }

  onSearchFieldsSelected(invoiceSearchField: InvoiceSearchField){
    this.searchText = invoiceSearchField.searchText;
    this.selectedDate = invoiceSearchField.searchDate;
  }
}
