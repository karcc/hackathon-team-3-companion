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
    //console.log(this.router.getCurrentNavigation().extras.state.user);
    console.log("historyy " + history.state.data.user.sessionId);
    console.log("historyy222 " + this.user.sessionId);
  }

  onRegister() {
    console.log("asdada");
  };
}
