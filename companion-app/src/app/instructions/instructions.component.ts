import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class InstructionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    console.log(this.router.getCurrentNavigation().extras.state.userData.sessionId);
  }

  onRegister() {
    console.log("asdada");
  };
}
