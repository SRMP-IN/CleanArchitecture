import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
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
  getValidClass :string='pt-3'


  constructor(
    private titleService: TitleService,
    private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required, Validators.minLength(3)]
    });
  }



  


  loginFormSubmit() {
    this.getValidClass='pt-3';
    if(this.loginForm.invalid)
    {
      this.getValidClass='pt-3 needs-validation was-validated';
      return
    }
    return;

    console.log('Form', this.loginForm.value);
    console.log('email-get', this.loginForm.get('email'));
    console.log('email-value', this.loginForm.get('email')?.value); 
  }
}
