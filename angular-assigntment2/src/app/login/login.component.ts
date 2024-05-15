import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule , JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginGroup: FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"), Validators.required, Validators.minLength(7), Validators.maxLength(50)]),
      password: new FormControl(null, [Validators.minLength(8), Validators.maxLength(100), Validators.required])
    })

    check() {
      if (!this.loginGroup.valid) {
        alert('data is invalid')
      }
    }
}
