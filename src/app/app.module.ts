import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceSearchComponent } from './invoice-search/invoice-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { InvoicePreviewComponent } from './invoice-preview/invoice-preview.component';  
import { SafePipe } from './safe.pipe';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MaterialModule } from './material.module';
import { InvoiceComplexViewComponent } from './invoice-complex-view/invoice-complex-view.component';  
import { AppConfigService } from './app-config.service';
import { InvoiceTableComponent } from './invoice-table/invoice-table.component';
import { InvoicesStatusesComponent } from './invoices-statuses/invoices-statuses.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
 

export function initializeApp(appConfig: AppConfigService) {
    return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    InvoiceSearchComponent,
    InvoicePreviewComponent,
    InvoicesStatusesComponent,
    SafePipe,
    InvoiceComplexViewComponent,
    InvoiceTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,  
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient,
              AppConfigService,
              {
                provide: APP_INITIALIZER,
                useFactory: initializeApp,
                deps: [AppConfigService],
                multi: true,
              },
              { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
