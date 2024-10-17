import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesStatusesComponent } from './invoices-statuses.component';

describe('InvoicesStatusesComponent', () => {
  let component: InvoicesStatusesComponent;
  let fixture: ComponentFixture<InvoicesStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesStatusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
