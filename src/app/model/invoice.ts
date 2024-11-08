import { Customer } from "./customer";
import { InvoiceStatus } from "./invoice-status";
import { InvoiceItem } from "./invoice.item";


export class Invoice {
    invoiceNumber: string;
    invoiceName: string;
    supplierName: string;
    invoiceDate: Date;
    dueDate: Date;
    customerId: string;
    customer: Customer;
    items: InvoiceItem[] = [];
    taxPercentage: number;
    invoiceStatus: InvoiceStatus;
  
    constructor(invoiceNumber: string, 
                invoiceName: string,
                supplierName: string,
                invoiceDate: Date, 
                dueDate: Date, 
                customerId: string, 
                customer: Customer, 
                items: InvoiceItem[], 
                taxPercentage: number,
                invoiceStatus: InvoiceStatus
              ) {

      this.invoiceNumber = invoiceNumber;
      this.invoiceName   = invoiceName;
      this.supplierName  = supplierName;
      this.invoiceDate   = invoiceDate;
      this.dueDate       = dueDate;
      this.customerId    = customerId;
      this.customer      = customer;
      this.items         = items;
      this.taxPercentage = taxPercentage;
      this.invoiceStatus = invoiceStatus;
    }
  
    // Calculate subtotal
    get subtotal(): number {
      return this.items.reduce((sum, item) => sum + item.total, 0);
    }
  
    // Calculate tax amount
    get taxAmount(): number {
      return (this.subtotal * this.taxPercentage) / 100;
    }
  
    // Calculate total amount
    get totalAmount(): number {
      return this.subtotal + this.taxAmount;
    }
  }
  