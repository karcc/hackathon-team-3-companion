import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
import {FormGroup} from "@angular/forms";
import {UserInfo} from "../entities/UserInfo";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

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
    this.loginService.postUserInfo(userNickname, this.user).subscribe((res) => {
      this.user = res;
      console.log("loggin second: " + this.user.sessionId);
      this.instructionsNavigation();
    });
  }


  instructionsNavigation(){
    this.router.navigate(['/instructions'], {state: {data: {user: this.user}}});
  }
}
