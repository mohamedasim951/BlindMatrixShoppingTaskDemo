import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public fb: FormBuilder, public commonService: CommonService) {}

  ngOnInit() {}

  LoginForm: FormGroup = this.fb.group({
    UserName: [null, [Validators.required]],
    Password: [null, [Validators.required]],
  });
  IsError: boolean = false;

  submit(data) {
    debugger;
    if (data.UserName == 'asim' && data.Password == '12345') {
      localStorage.setItem('LoginStatus', 'true');
      localStorage.setItem('UserName', data.UserName);
      this.commonService.LoginStatus = localStorage.getItem('LoginStatus');
    } else {
      this.IsError = true;
      localStorage.setItem('LoginStatus', 'false');
    }
  }
}
