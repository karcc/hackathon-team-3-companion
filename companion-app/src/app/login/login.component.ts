import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
import {FormGroup} from "@angular/forms";
import {UserInfo} from "../entities/UserInfo";

@Component({
  selector: 'companion-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  user: UserInfo;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  onRegister(userNickname: string) {
    console.log(userNickname);
    this.user = new UserInfo();
    this.loginService.register(userNickname, this.user);
  }
}
