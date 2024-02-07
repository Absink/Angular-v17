import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsOrderComponent } from './page-details-order.component';

describe('PageDetailsOrderComponent', () => {
  let component: PageDetailsOrderComponent;
  let fixture: ComponentFixture<PageDetailsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailsOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
