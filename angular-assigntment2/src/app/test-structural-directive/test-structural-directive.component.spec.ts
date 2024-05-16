import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStructuralDirectiveComponent } from './test-structural-directive.component';

describe('TestStructuralDirectiveComponent', () => {
  let component: TestStructuralDirectiveComponent;
  let fixture: ComponentFixture<TestStructuralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestStructuralDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
