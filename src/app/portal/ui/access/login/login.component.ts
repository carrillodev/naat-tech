import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

// Navigation
import { Router } from '@angular/router';
import { LoginRequest, RefreshTokenRequest } from 'src/app/data/models/request/login/loginRequest';
import { LoginResponse } from 'src/app/data/models/response/login/loginResponse';
import { LoginServiceService } from 'src/app/data/network/auth/login-service.service';

// CONSTANTS & UTILITIES
import * as Images from '../../../utils/imageRoutes';
import * as TextsES from '../../../utils/textConstantsES';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Image paths
  public logoNaatTech = Images.LOGO_NAAT_TECH;

  // Texts
  public texts = TextsES.LOGIN;
  public inputText = TextsES.INPUTS;
  public buttonText = TextsES.BUTTONS;

  // Form
  public loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;

  constructor(private router: Router, private formBuilder: FormBuilder, private api: LoginServiceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-z A-Z0-9]{6,15}'),
        ]),
      ],
    });

    this.email = this.loginForm.controls.email;
    this.password = this.loginForm.controls.password;
  }

  ngOnInit(): void {}

  public doLogin(): void {
    this.loginForm.reset();
    this.router.navigate(['dashboard']);
  }

  public validateEmailFormat() {
    if(this.email.valid) {
      this.password.enable();
    } else {
      this.password.disable();
    }
  }

  private postLogin() {
    const body: LoginRequest = {
      authorizationCode: ''
    };

    this.api.postLogin(body).subscribe((dataResponse: LoginResponse) => {
      try {

      } catch (err) {}
    }, errorResponse => {});
  }

  private postRefreshToken(token: string) {
    const body: RefreshTokenRequest = {
      refreshToken: token
    };

    this.api.postRefresh(body).subscribe((dataResponse: LoginResponse) => {
      try {

      } catch (err) {}
    }, errorResponse => {});
  }
}
