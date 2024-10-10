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
 

export function initializeApp(appConfig: AppConfigService) {
    return () => appConfig.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    InvoiceSearchComponent,
    InvoicePreviewComponent,
    SafePipe,
    InvoiceComplexViewComponent
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
              }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
