import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventTypes } from 'src/app/models/Toast/event-types';
import { TitleService } from 'src/app/services/title.service';
import { ToastService } from 'src/app/services/Toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';
import { DateTime, SITE_NAME } from 'src/app/utilities/constants/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Login';
  SITE_NAME = SITE_NAME;

  loginForm!: FormGroup;
  returnUrl = '';
  getValidClass: string = 'pt-3'

  constructor(
    private titleService: TitleService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private userService: UserService,
    private route: Router
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  loginFormSubmit() {
    this.getValidClass = 'pt-3';
    if (this.loginForm.invalid) {
      this.getValidClass = 'pt-3 needs-validation was-validated';
      this.toastService.nextToast(this.title, 'invalid credentials.', DateTime, EventTypes.Warning);
      return
    }
    
    if (this.userService.login({ email: this.loginForm.get('email')?.value, password: this.loginForm.get('password')?.value })) {
      this.toastService.nextToast(this.title, 'Login Successfully.', DateTime, EventTypes.Success);
      this.route.navigateByUrl('/home'  )
    }
    else {
      this.toastService.nextToast(this.title, 'invalid credentials.', DateTime, EventTypes.Warning);
    } 
  }
}
