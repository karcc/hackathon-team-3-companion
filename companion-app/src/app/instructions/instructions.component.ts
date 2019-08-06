import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserInfo} from "../entities/UserInfo";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class InstructionsComponent implements OnInit {

  user: UserInfo;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = history.state.data.user;

  }

  onRegister() {
    this.questionNavigation();
  };

  questionNavigation(){
    this.router.navigate(['/mctquestion'], {state: {data: {user: this.user}}});
  }
}
