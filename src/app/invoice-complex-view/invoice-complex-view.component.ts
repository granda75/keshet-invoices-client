import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-complex-view',
  templateUrl: './invoice-complex-view.component.html',
  styleUrls: ['./invoice-complex-view.component.scss']
})
export class InvoiceComplexViewComponent {
  invoiceTableFirst: boolean = true;

  pdfUrl!: string;

  toggleView(): void {
    this.pdfUrl = "";
    this.invoiceTableFirst = !this.invoiceTableFirst;
  }

  onPdfUrlSelected(pdfUrl: string): void {
    this.pdfUrl = pdfUrl;  
  }
}