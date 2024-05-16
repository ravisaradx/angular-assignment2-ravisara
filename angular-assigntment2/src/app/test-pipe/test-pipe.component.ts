import { Component } from '@angular/core';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-test-pipe',
  standalone: true,
  imports: [CustomPipe],
  templateUrl: './test-pipe.component.html',
  styleUrl: './test-pipe.component.css'
})
export class TestPipeComponent {

}
