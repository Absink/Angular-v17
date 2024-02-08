import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFooterComponent } from './icon-footer.component';

describe('IconFooterComponent', () => {
  let component: IconFooterComponent;
  let fixture: ComponentFixture<IconFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
