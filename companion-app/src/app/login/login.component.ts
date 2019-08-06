import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
import {FormGroup} from "@angular/forms";
import {UserInfo} from "../entities/UserInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'companion-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  user: UserInfo;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onRegister(userNickname: string) {
    console.log(userNickname);
    this.user = new UserInfo();
    this.loginService.register(userNickname, this.user);
    console.log(this.user.sessionId);
    //this.instructionsNavigation();
  }

  instructionsNavigation(){
    this.router.navigate(['/instructions'], {state: {data: {userData : this.user}}});
  }
}
