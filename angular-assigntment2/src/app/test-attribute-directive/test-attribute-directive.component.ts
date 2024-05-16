import { Component } from '@angular/core';
import { AttributeDirective } from '../attribute.directive';

@Component({
  selector: 'app-test-attribute-directive',
  standalone: true,
  imports: [AttributeDirective],
  templateUrl: './test-attribute-directive.component.html',
  styleUrl: './test-attribute-directive.component.css'
})
export class TestAttributeDirectiveComponent {

}
