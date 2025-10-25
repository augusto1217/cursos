import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  signUpForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private coockieService: CookieService
  ) {}

  onSubmitLoginForm(): void {
    if (this.loginForm.value && this.loginForm.valid) {
      this.userService.authUser(this.loginForm.value as AuthRequest).subscribe({
        next: (response) => {
          if (response) {
            this.coockieService.set('USER_INFO', response?.token);
            this.loginForm.reset();
          }
        },
        error(err) {
            console.log(err)
        },
      });
    }
  }

  onSubmitSignupForm(): void {
    if (this.signUpForm.value && this.signUpForm.valid) {
      this.userService
        .signupUser(this.signUpForm.value as SignupUserRequest)
        .subscribe({
          next: (response) => {
            if (response) {
              alert('Usuario teste criado com sucesso.');
              this.signUpForm.reset();
              this.loginCard = true;
            }
          },
          error: (err) => console.log(err),
        });
    }
  }
}
