import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {UserInfo} from "../entities/UserInfo";
import {Questions} from "../entities/Questions";
import {UserInfoService} from "../services/user-info-service";
import {QuestionService} from "../services/question-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-multiple-choice-text-question',
  templateUrl: './multiple-choice-text-question.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css'],
})
export class MultipleChoiceTextQuestionComponent implements OnInit {

  isLoaded: boolean;

  selectedAnswer: string;
  selectedCss = 'selected';

  user: UserInfo;
  question: Questions;
  timer = undefined;

  @ViewChild('timer', undefined) timerElm: ElementRef;

  decriment: number     = 0;
  warnningTime: number  = 65;
  criticalTime: number  = 30;
  countdownTime: number = 30 * 1;  // 60 for secounds times whatever for minutes...

  constructor(private userService: UserInfoService,
              private questionService: QuestionService,
              private router: Router) {
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

    console.log('question choices: ' + this.question.choices);
  }

  ngAfterViewInit() {
    this.setTimerData();
  }

  passQuestion() {
    console.log('passing question!');
    this.questionService.getQuestion(this.user.sessionId).subscribe( questiondata => {
      if (questiondata == null) {
        this.router.navigate(['/leaderboard'], {state: {data: {user: this.user}}});
      }
      this.question = questiondata;
      this.isLoaded = true;
      this.setTimerData();
    });
  }

  selectAnswer(choice: string): void {
    console.log('Selected answer: ' + choice);
    this.selectedAnswer = choice;

  }

  sendAnswer(): void {
    console.log('sending answer: ' + this.selectedAnswer);
    this.questionService.sendAnswer(this.user.sessionId, this.selectedAnswer).subscribe( userData => {
      this.user = userData;
      if(this.user.correct == true) {
        console.log('Question answered correctly!');
        this.questionService.getQuestion(this.user.sessionId).subscribe( questiondata => {
          if (questiondata == null) {
            this.router.navigate(['/leaderboard'], {state: {data: {user: this.user}}});
          }
          this.question = questiondata;
          this.isLoaded = true;
          this.setTimerData();
        });
      }
    });

  }

  setTimerData() {
    if(this.timer) {
      clearInterval(this.timer);
    }

    this.countdownTime = 30 * 1;
    let elm = this.timerElm.nativeElement;
    elm.style.width = "100%";
    elm.style.backgroundColor = "rgb(25, 233, 36)";

    // Set and check timeout intervals
    this.decriment = 100 / this.countdownTime;
    this.timer = setInterval(() => {
        this.runCountdownLogic();
    }, 1000);
  }

  runCountdownLogic() {
    if(this.countdownTime > 0) {
      let elm = this.timerElm.nativeElement;
      this.countdownTime -= 1;
      const wdth: string = elm.style.width;
      const timerSize: number =  parseInt(wdth.replace('%', ''), 10) - this.decriment;

      elm.style.width = timerSize + "%";
      if(timerSize <= this.warnningTime && timerSize >= this.criticalTime) {
          elm.style.backgroundColor = "#ffa600";
      } else if(timerSize <= this.warnningTime && timerSize <= this.criticalTime) {
          elm.style.backgroundColor = "#ff0000";
      }
    } else if (this.countdownTime <= 0) {
      clearInterval(this.timer);
      this.passQuestion();
    }
  }
}
