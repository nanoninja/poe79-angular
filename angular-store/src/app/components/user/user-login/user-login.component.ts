import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private router: Router,
    private authUserService: AuthService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(4)
      ]]
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const email = this.formGroup.get('email')?.value;
    const password = this.formGroup.get('password')?.value;

    this.authUserService.login(email, password)
      .subscribe(() => this.router.navigate(['/']));
  }

  onCancel(): void {
    this.location.back();
  }

}
