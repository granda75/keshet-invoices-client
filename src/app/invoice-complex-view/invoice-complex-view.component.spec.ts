import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceComplexViewComponent } from './invoice-complex-view.component';

describe('InvoiceComplexViewComponent', () => {
  let component: InvoiceComplexViewComponent;
  let fixture: ComponentFixture<InvoiceComplexViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceComplexViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceComplexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
