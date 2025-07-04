import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricationstructuralComponent } from './fabricationstructural.component';

describe('FabricationstructuralComponent', () => {
  let component: FabricationstructuralComponent;
  let fixture: ComponentFixture<FabricationstructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FabricationstructuralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricationstructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
