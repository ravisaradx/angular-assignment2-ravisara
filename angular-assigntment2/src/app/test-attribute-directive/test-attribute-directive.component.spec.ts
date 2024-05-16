import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAttributeDirectiveComponent } from './test-attribute-directive.component';

describe('TestAttributeDirectiveComponent', () => {
  let component: TestAttributeDirectiveComponent;
  let fixture: ComponentFixture<TestAttributeDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAttributeDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestAttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
