import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assigntment2';

  constructor(private router: Router) { }

  toLogin() {
    this.router.navigate(['/login'])
  }

  toDemographic() {
    this.router.navigate(['/demographic'])
  }
}
