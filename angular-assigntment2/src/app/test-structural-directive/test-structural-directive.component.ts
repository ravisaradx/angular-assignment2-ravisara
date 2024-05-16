import { Component } from '@angular/core';
import { StructuralDirective } from '../structural.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-structural-directive',
  standalone: true,
  imports: [StructuralDirective, FormsModule],
  templateUrl: './test-structural-directive.component.html',
  styleUrl: './test-structural-directive.component.css'
})
export class TestStructuralDirectiveComponent {
  answer: string = '';
}
