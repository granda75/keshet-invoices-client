import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-complex-view',
  templateUrl: './invoice-complex-view.component.html',
  styleUrls: ['./invoice-complex-view.component.scss']
})
export class InvoiceComplexViewComponent {
  
  invoicePreviewVisible: boolean = false;

  pdfUrl!: string;

  toggleView(): void {
    //this.pdfUrl = "";
    this.invoicePreviewVisible = !this.invoicePreviewVisible;
    
  }

  onPdfUrlSelected(pdfUrl: string): void {
    this.pdfUrl = pdfUrl;  
  }
}
