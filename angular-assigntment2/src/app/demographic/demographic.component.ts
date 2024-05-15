import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demographic',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './demographic.component.html',
  styleUrl: './demographic.component.css'
})
export class DemographicComponent {
    demoGroup: FormGroup = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
        lastname: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
        birthDate: new FormControl(null, [Validators.required]),
        tel: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        hobbies: new FormControl(null)
    })

    check() {
      if (!this.demoGroup.valid) {
        alert('data is invalid')
      }
    }
}
