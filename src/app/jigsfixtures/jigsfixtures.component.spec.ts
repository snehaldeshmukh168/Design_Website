import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigsfixturesComponent } from './jigsfixtures.component';

describe('JigsfixturesComponent', () => {
  let component: JigsfixturesComponent;
  let fixture: ComponentFixture<JigsfixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JigsfixturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JigsfixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
