import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlccontrolpanelComponent } from './plccontrolpanel.component';

describe('PlccontrolpanelComponent', () => {
  let component: PlccontrolpanelComponent;
  let fixture: ComponentFixture<PlccontrolpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlccontrolpanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlccontrolpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
