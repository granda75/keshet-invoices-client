import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss']
})
export class InvoicePreviewComponent implements OnInit {
  

  @Input() pdfUrl!: string;
  

  constructor(private sanitizer: DomSanitizer) { 

  }

  ngOnInit(): void {

  
  }

  ngAfterViewInit(): void {
   
   
  }


}
