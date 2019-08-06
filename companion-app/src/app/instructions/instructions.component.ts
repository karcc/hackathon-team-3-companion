import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class InstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRegister() {
    console.log("asdada");
  };
}
