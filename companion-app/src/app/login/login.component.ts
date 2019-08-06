import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'companion-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})

export class LoginComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
  }

  onRegister() {
    console.log("asdada");
  };
}
