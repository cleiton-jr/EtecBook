import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerFrom!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnit(): void {
    this.registerFrom = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  checkName() {
    return this.registerFrom.controls['name'].dirty && this.registerFrom.controls['name'].errors?.['required'];
  }

  checkEmail() {
    return this.registerFrom.controls['email'].dirty && this.registerFrom.controls['email'].errors?.['required'];
  }

  checkEmailValid() {
    return this.registerFrom.controls['email'].dirty && this.registerFrom.controls['email'].errors?.['required'];
  }

  checkPassword() {
    return this.f['password'].dirty && this.fb['password'].errors?.["minlenght"]
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Enviar os dados ao backend
      console.log(this.registerForm.value);
    } else {
      // Dispara um erro
      this.validateAllFormFields(this.registerForm);
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);

      }
    });
