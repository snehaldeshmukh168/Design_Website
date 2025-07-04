import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreverseengineeringComponent } from './cadreverseengineering.component';

describe('CadreverseengineeringComponent', () => {
  let component: CadreverseengineeringComponent;
  let fixture: ComponentFixture<CadreverseengineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadreverseengineeringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadreverseengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
