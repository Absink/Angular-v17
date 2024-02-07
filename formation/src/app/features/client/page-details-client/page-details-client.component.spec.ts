import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailsClientComponent } from './page-details-client.component';

describe('PageDetailsClientComponent', () => {
  let component: PageDetailsClientComponent;
  let fixture: ComponentFixture<PageDetailsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailsClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
