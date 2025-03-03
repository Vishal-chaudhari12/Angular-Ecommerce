import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSellerListComponent } from './all-seller-list.component';

describe('AllSellerListComponent', () => {
  let component: AllSellerListComponent;
  let fixture: ComponentFixture<AllSellerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSellerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
