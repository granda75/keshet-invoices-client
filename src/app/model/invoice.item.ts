export class InvoiceItem {
    itemNumber: number;
    description: string;
    quantity: number;
    unitPrice: number;
    pdfUrl!: string;
  
    constructor(itemNumber: number, description: string, quantity: number, unitPrice: number) {
      this.itemNumber = itemNumber;
      this.description = description;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
      this.pdfUrl = '';
    }
  
    
    get total(): number {
      return this.quantity * this.unitPrice;
    }
  }