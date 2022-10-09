import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventTypes } from 'src/app/models/Toast/event-types';
import { TitleService } from 'src/app/services/title.service';
import { ToastService } from 'src/app/services/Toast/toast.service';
import { SITE_NAME } from 'src/app/utilities/constants/common';

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
    private toastService: ToastService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required, Validators.minLength(3)]
    });
  }


  EventTypes = EventTypes;
  showToast(type: EventTypes) {
    const time = new Date();
    switch (type) {
      case EventTypes.Success:
        this.toastService.nextToast('Success toast title', 'This is a success toast message.', time,type);
        break;
      case EventTypes.Warning:
        this.toastService.nextToast('Warning toast title', 'This is a warning toast message.', time,type);
        break;
      case EventTypes.Error:
        this.toastService.nextToast('Error toast title', 'This is an error toast message.', time,type);
        break;
      default:
        this.toastService.nextToast('Info toast title', 'This is an info toast message.', time,type);
        break;
    }
  }



  loginFormSubmit() {
    this.getValidClass = 'pt-3';
    if (this.loginForm.invalid) {
      this.getValidClass = 'pt-3 needs-validation was-validated';
      return
    }
    return;

    console.log('Form', this.loginForm.value);
    console.log('email-get', this.loginForm.get('email'));
    console.log('email-value', this.loginForm.get('email')?.value);
  }
}
