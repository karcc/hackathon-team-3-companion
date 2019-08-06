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

  isLoaded: boolean;

  user: UserInfo;
  question: Questions;

  constructor(private userService: UserInfoService,
              private questionService: QuestionService) {
    this.user = history.state.data.user;
  }

  ngOnInit() {
    this.user = history.state.data.user;
    console.log('mct: ' + this.user.sessionId);
    console.log('mctname: ' + this.user.nickname);
    this.questionService.getQuestion(this.user.sessionId).subscribe( questiondata => {
      this.question = questiondata;
      this.isLoaded = true;
    });
  }

  passQuestion() {
    console.log('passing question!');
  }
}
