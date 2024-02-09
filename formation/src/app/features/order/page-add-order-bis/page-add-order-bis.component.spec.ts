import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddOrderBisComponent } from './page-add-order-bis.component';

describe('PageAddOrderBisComponent', () => {
  let component: PageAddOrderBisComponent;
  let fixture: ComponentFixture<PageAddOrderBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddOrderBisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAddOrderBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
