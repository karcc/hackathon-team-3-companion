import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from "../entities/UserInfo";
import {Questions} from "../entities/Questions";
import {UserInfoService} from "../services/user-info-service";
import {QuestionService} from "../services/question-service";

@Component({
  selector: 'app-multiple-choice-text-question',
  templateUrl: './multiple-choice-text-question.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'],
})
export class MultipleChoiceTextQuestionComponent implements OnInit {

  @Input()
  sessionKey: string;

  user: UserInfo;
  question: Questions;

  constructor(private userService: UserInfoService,
              private questionService: QuestionService) { }

  ngOnInit() {
    this.userService.getUser(this.sessionKey).subscribe( userData => {
      this.user = userData;
    });

    this.questionService.getQuestion(this.sessionKey).subscribe( questiondata => {
      this.question = questiondata;
    });
  }

  passQuestion() {
    console.log('passing question!');
  }
}
