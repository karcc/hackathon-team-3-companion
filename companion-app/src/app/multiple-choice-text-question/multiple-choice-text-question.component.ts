import { Component, OnInit } from '@angular/core';
import {UserInfo} from "../entities/UserInfo";
import {Questions} from "../entities/Questions";

@Component({
  selector: 'app-multiple-choice-text-question',
  templateUrl: './multiple-choice-text-question.component.html'
})
export class MultipleChoiceTextQuestionComponent implements OnInit {

  user: UserInfo;
  question: Questions;

  constructor() { }

  ngOnInit() {
  }

}
