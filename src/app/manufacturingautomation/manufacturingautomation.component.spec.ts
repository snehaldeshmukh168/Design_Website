import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingautomationComponent } from './manufacturingautomation.component';

describe('ManufacturingautomationComponent', () => {
  let component: ManufacturingautomationComponent;
  let fixture: ComponentFixture<ManufacturingautomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManufacturingautomationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManufacturingautomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
