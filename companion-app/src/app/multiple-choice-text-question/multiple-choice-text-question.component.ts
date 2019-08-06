import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../entities/UserInfo";

@Component({
  selector: 'app-multiple-choice-text-question',
  templateUrl: './multiple-choice-text-question.component.html'
})
export class MultipleChoiceTextQuestionComponent implements OnInit {

  user: UserInfo;

  constructor() { }

  ngOnInit() {
  }

}
