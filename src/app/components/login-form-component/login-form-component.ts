import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
})
export class LoginFormComponent {
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
