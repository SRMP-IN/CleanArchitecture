import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { SITE_NAME } from 'src/app/utilities/constants/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'Login';  
  SITE_NAME=SITE_NAME;
  constructor(private titleService: TitleService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {}
}
