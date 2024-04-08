import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrDeleteConfirmationComponent } from './pr-delete-confirmation.component';

describe('PrDeleteConfirmationComponent', () => {
  let component: PrDeleteConfirmationComponent;
  let fixture: ComponentFixture<PrDeleteConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrDeleteConfirmationComponent]
    });
    fixture = TestBed.createComponent(PrDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
